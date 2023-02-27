import React, { useEffect } from 'react';
import { Section } from './components/Section';
import { AppContainer } from './components/AppContainer';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import { vault } from './libs/vault';

function App() {
  const { list, actions } = vault.useStore('guestbook');

  useEffect(() => {
    actions.load();
  }, [actions]);

  return (
    <AppContainer>
      <Header>{'Wedding'}</Header>
      <NavigationBar />
      <Section>
        <span>{'Section 1'}</span>
      </Section>
      <Section>
        <span>{'Section 2'}</span>
      </Section>
      <Section>{'Section 3'}</Section>
      <Section>{'Section 4'}</Section>
      <Section>
        {list.map((item) => {
          return <div key={item.id}>{item.message}</div>;
        })}
      </Section>
    </AppContainer>
  );
}

export default App;
