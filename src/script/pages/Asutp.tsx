import React from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

export const Asutp: React.FC = () => {
  const key: IPageData = useParams();
  const section: string = key.section || 're';
  const title = getTitlePage(section, 'asutp');
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>АСУТП</h2>
        <p>Здесь собрана полезная информация по АСУТП</p>
        <p>{title}</p>
      </main>
    </>
  );
};
