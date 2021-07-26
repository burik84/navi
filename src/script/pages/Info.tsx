import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';
import { getData } from '../services/getData';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { Lists } from '../components/Lists';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData } from '../shared/types';

export const Info: React.FC = () => {
  const [listDataAll, setListDataEll] = useState([]);

  const key: IPageData = useParams();
  const section: string = key.section || 'otpb';
  const title = getTitlePage(section, 'info');

  const { source = [] } = AppContextSource();
  useEffect(() => {
    const data = getData('info', source);
    setListDataEll(data);
  }, [section]);

  // const sourceInfo = () => {
  //   const data = getData('info', source);
  //   console.log(data);
  //   return data;
  // };
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Информация</h2>
        <p>Здесь собрана полезная информация по работе</p>
        <p>{title}</p>
        <Lists section={section} data={listDataAll} />
      </main>
    </>
  );
};
