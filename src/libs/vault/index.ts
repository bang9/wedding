import { storeHookProvider } from './vault.store';
import { createVault } from './vault.factory';

export const Vault = createVault(storeHookProvider);
