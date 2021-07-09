import React from 'react';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Asutp: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>АСУТП</h2>
        <p>Здесь собрана полезная информация по АСУТП</p>
      </main>
    </>
  );
};
