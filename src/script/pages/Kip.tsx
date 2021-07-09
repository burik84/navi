import React from 'react';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Kip: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Инструкции на приборы КИП</h2>
        <p>Здесь собрана информация по оборудованию КИП</p>
      </main>
    </>
  );
};
