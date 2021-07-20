import React from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

export const Kip: React.FC = () => {
  const key: IPageData = useParams();
  const section: string = key.section || 'analyzer';
  const title = getTitlePage(section, 'kip');
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Инструкции на приборы КИП</h2>
        <p>Здесь собрана информация по оборудованию КИП</p>
        <p>{title}</p>
      </main>
    </>
  );
};
