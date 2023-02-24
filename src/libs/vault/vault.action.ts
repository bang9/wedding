type ToastActionType = 'SHOW_TOAST' | 'HIDE_TOAST';
type VaultAction = ToastActionType;

export type Action = {
  type: VaultAction;
  value?: unknown;
};
