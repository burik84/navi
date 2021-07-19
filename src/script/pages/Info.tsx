import React from 'react';

import { useParams } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import { getTitlePage } from '../shared/getTitlePage';
import { PageData } from '../shared/types';

export const Info: React.FC = () => {
  const key: PageData = useParams();
  const section: string = key.section || 'otpb';
  const title = getTitlePage(section, 'info');
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Информация</h2>
        <p>Здесь собрана полезная информация по работе</p>
        <p>{title}</p>
      </main>
    </>
  );
};
