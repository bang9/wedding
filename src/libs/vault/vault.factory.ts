import type { Action } from './vault.action';
import { StoreHookProvider } from './vault.store';

export const createVault = (store: StoreHookProvider) => {
  return {
    get: (name: keyof StoreHookProvider) => {
      return store[name]();
    },
    getStatic: (name: keyof StoreHookProvider) => {
      return store[name].getState();
    },
    subscribe: <T extends keyof StoreHookProvider = keyof StoreHookProvider>(
      name: T,
      subscribe: Parameters<StoreHookProvider[T]['subscribe']>[0],
    ) => {
      return store[name].subscribe(subscribe);
    },
    dispatch: (action: Action) => {
      switch (action.type) {
        case 'SHOW_TOAST': {
          if (typeof action.value === 'boolean') {
            store.toast.getState().show();
          }
          break;
        }
        case 'HIDE_TOAST': {
          store.toast.getState().hide();
          break;
        }
      }
    },
  };
};
