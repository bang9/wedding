import React, { useEffect, useRef } from 'react';
import { Section } from './components/Section';
import { AppContainer } from './components/AppContainer';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { Vault, VaultActions } from './libs/vault';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const { visible } = Vault.get('toast');

  useEffect(() => {
    return Vault.subscribe('toast', (state) => {
      console.log('state changed:', state.visible);
    });
  }, []);

  return (
    <AppContainer ref={appRef}>
      <Header>{'Wedding'}</Header>
      <NavigationBar />
      <Section>
        <span>{'Section 1-1'}</span>
        <span>{'Section 1-2'}</span>
        <button
          onClick={() => {
            if (visible) {
              Vault.dispatch(VaultActions.toast.hide());
            } else {
              Vault.dispatch(VaultActions.toast.show());
            }
          }}
        >
          {visible ? 'hide' : 'show'}
        </button>
      </Section>
      <Section>{'Section 2'}</Section>
      <Section>{'Section 3'}</Section>
      <Section>{'Section 4'}</Section>
      {visible && <div>{'toast'}</div>}
    </AppContainer>
  );
}

export default App;
