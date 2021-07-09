import React from 'react';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Uku: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Узлы коммерческого учета</h2>
        <p>Здесь собрана информация по узлам коммерческого учета</p>
      </main>
    </>
  );
};
