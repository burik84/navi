import React from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

type key = {
  section: string;
};

export const Scheme: React.FC = () => {
  const key: IPageData = useParams();
  const section: string = key.section || 'sug';
  const title = getTitlePage(section, 'shemes');
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Схемы</h2>
        <p>{title}</p>
      </main>
    </>
  );
};
