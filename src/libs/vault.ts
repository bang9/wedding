import { createVault, storeBuilder } from 'zustand-vault';

type Store = {
  toast: {
    visible: boolean;
    show(): void;
    hide(): void;
    toggle(): void;
  };
  test: {
    wow: string;
  };
};

const vaultStore = storeBuilder<Store>()
  .put('toast', (set) => ({
    visible: true,
    show: () => set({ visible: true }),
    hide: () => set({ visible: false }),
    toggle: () => set((state) => ({ visible: !state.visible })),
  }))
  .put('test', () => ({
    wow: '123',
  }))
  .get();

export const Vault = createVault(vaultStore);
