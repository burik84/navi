import React from 'react';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Scheme: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Схемы</h2>
        <p>Здесь представлены схемы по комплексу</p>
      </main>
    </>
  );
};
