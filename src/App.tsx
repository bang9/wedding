import React, { useEffect } from 'react';
import { Section } from './components/Section';
import { AppContainer } from './components/AppContainer';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { Vault } from './libs/vault';

function App() {
  const { visible, toggle } = Vault.useStore('toast');

  useEffect(() => {
    return Vault.store('toast').subscribe((state) => {
      console.log('Vault.getState():', Vault.store('toast').getState().visible);
      console.log('state changed:', state.visible);
    });
  }, []);

  return (
    <AppContainer>
      <Header>{'Wedding'}</Header>
      <NavigationBar />
      <Section>
        <span>{'Section 1-1'}</span>
        <span>{'Section 1-2'}</span>
        <button
          onClick={() => {
            toggle();
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
