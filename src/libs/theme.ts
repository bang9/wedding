import type { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: string;
      primary: string;
      positive: string;
      negative: string;
    };
    size: {
      viewport: string;
      px4: string;
      px8: string;
      px12: string;
      px16: string;
      px20: string;
      px24: string;
    };
  }
}

export const theme: Theme = {
  color: {
    background: '#ffffff',
    primary: '#ff8888',
    positive: '#ff8888',
    negative: '#ff8888',
  },
  size: {
    viewport: '420px',
    px4: '4px',
    px8: '8px',
    px12: '12px',
    px16: '16px',
    px20: '20px',
    px24: '24px',
  },
};
