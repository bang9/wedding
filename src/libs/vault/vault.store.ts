import { create, StoreApi, UseBoundStore } from 'zustand';

export interface StoreHookProvider {
  toast: UseBoundStore<StoreApi<ToastStore>>;
}

interface ToastStore {
  visible: boolean;
  show(): void;
  hide(): void;
  toggle(): void;
}

export const useToastStore = create<ToastStore>((set) => ({
  visible: false,
  show: () => set({ visible: true }),
  hide: () => set({ visible: false }),
  toggle: () => set((state) => ({ visible: !state.visible })),
}));

export const storeHookProvider: StoreHookProvider = {
  toast: useToastStore,
};
