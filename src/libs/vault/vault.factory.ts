import type { Action } from './vault.action';
import { StoreHookProvider } from './vault.store';

export const createVault = (store: StoreHookProvider) => {
  return {
    useStore: (name: keyof StoreHookProvider) => {
      return store[name]();
    },
    store: <T extends keyof StoreHookProvider>(
      name: T,
    ): Pick<StoreHookProvider[T], 'subscribe' | 'setState' | 'getState' | 'destroy'> => store[name],
  };
};
