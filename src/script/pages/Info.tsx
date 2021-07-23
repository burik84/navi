import React from 'react';

import { useParams } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

export const Info: React.FC = () => {
  const key: IPageData = useParams();
  const { source = [] } = AppContextSource();
  const section: string = key.section || 'otpb';
  const title = getTitlePage(section, 'info');
  const sourceInfo = () => {
    return source;
  };
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Информация</h2>
        <p>Здесь собрана полезная информация по работе</p>
        <p>{title}</p>
        <p>{sourceInfo()}</p>
      </main>
    </>
  );
};
