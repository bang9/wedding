import { Action } from './vault.action';
import { storeHookProvider } from './vault.store';
import { createVault } from './vault.factory';

export const Vault = createVault(storeHookProvider);
export const VaultActions = {
  toast: {
    show(): Action {
      return { type: 'SHOW_TOAST', value: true };
    },
    hide(): Action {
      return { type: 'HIDE_TOAST', value: false };
    },
  },
};
