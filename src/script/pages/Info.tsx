import React from 'react';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Info: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Информация</h2>
        <p>Здесь собрана полезная информация по работе</p>
      </main>
    </>
  );
};
