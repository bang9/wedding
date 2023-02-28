import { createVault, storeBuilder } from 'zustand-vault';
import { GuestbookModel } from './repositories/guestbook.repository';
import { repositories } from './repositories';
import { combine } from './utils';

type Store = {
  toast: {
    visible: boolean;
    toggle(): void;
  };

  guestbook: {
    list: GuestbookModel[];
    actions: {
      load(): Promise<void>;
      add(data: GuestbookModel): Promise<void>;
      update(id: string, data: Partial<GuestbookModel>): Promise<void>;
      delete(id: string): Promise<void>;
    };
  };
};

const store = storeBuilder<Store>()
  .set('guestbook', ({ set, get }) => ({
    list: [],
    actions: {
      async load(): Promise<void> {
        if (get().list.length === 0) {
          set({ list: await repositories.guestbook.list() });
        }
      },
      async add(data: GuestbookModel): Promise<void> {
        await repositories.guestbook.upsert(data);
        set((state) => ({ list: [...state.list, data] }));
      },
      async update(id: string, data: Partial<GuestbookModel>): Promise<void> {
        const idx = get().list.findIndex((it) => it.id === id);
        const item = get().list[idx];
        if (item) {
          const newItem = combine(item, data, ['id', 'secretId', 'createdAt']);
          await repositories.guestbook.upsert(newItem);

          const draftList = get().list.concat();
          draftList[idx] = newItem;
          set({ list: draftList });
        }
      },
      async delete(id: string): Promise<void> {
        await repositories.guestbook.delete(id);

        const idx = get().list.findIndex((it) => it.id === id);
        const item = get().list[idx];
        if (item) {
          const draftList = get().list.concat();
          draftList.splice(idx, 1);
          set({ list: draftList });
        }
      },
    },
  }))
  .set('toast', ({ set }) => ({
    visible: false,
    toggle: () => set((state) => ({ visible: !state.visible })),
  }))
  .get();

export const vault = createVault(store);
