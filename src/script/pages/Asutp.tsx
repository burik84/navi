import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';
import { getData } from '../services/getData';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { Lists } from '../components/Lists';

import { getTitlePage } from '../shared/getTitlePage';
import { IPageData, IData } from '../shared/types';

const info: { [char: string]: string } = {
  re: 'instruction',
  centum: 'centumvp',
  prosafe: 'prosafe',
  server: 'server',
  siemens: 'siemens',
  stardom: 'stardom',
  hart: 'hart',
  scada: 'scada',
  enraf: 'enraf',
};

export const Asutp: React.FC = () => {
  const [listDataSection, setListDataSection] = useState<IData[] | []>([]);
  const [listDataTitle, setListDataTitle] = useState<string[] | []>([]);

  const key: IPageData = useParams();
  const section: string = key.section || 're';
  const title = getTitlePage(section, 'asutp');

  const { source = [] } = AppContextSource();
  useEffect(() => {
    const data = getData('asutp', source);
    const dataSection = data.filter((item: IData) => item.folder === info[section]);

    setListDataSection(dataSection);
    const titleArray: string[] = [];
    dataSection.forEach((item: IData) => {
      if (!titleArray.includes(item.title)) {
        titleArray.push(item.title);
      }
    });
    setListDataTitle(titleArray);
  }, [section]);

  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>АСУТП</h2>
        <p>Здесь собрана полезная информация по АСУТП</p>
        <p>{title}</p>
        <Lists title={listDataTitle} data={listDataSection} />
      </main>
    </>
  );
};
