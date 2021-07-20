import React from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

export const Uku: React.FC = () => {
  const key: IPageData = useParams();
  const section: string = key.section || '44_1';
  const title = getTitlePage(section, 'uku');
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Узлы коммерческого учета</h2>
        <p>Здесь собрана информация по узлам коммерческого учета</p>
        <p>{title}</p>
      </main>
    </>
  );
};
