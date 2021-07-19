import React from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

type key = {
  section: string;
};
type name = {
  '/': string;
  sug: string;
  us: string;
  uhb: string;
  ith: string;
  ups: string;
  ahz: string;
  other: string;
  ais: string;
  aov: string;
  rotork: string;
  sgoes: string;
};

const name = {
  '/': 'Участок хранения СУГ под давлением',
  sug: 'Участок хранения СУГ под давлением',
  us: 'Участок слива',
  uhb: 'Участок хранения бензинов',
  ith: 'Участок хранения СУГ охлажденных',
  ups: 'Участок погрузки судов',
  ahz: 'Административно-хозяйственная зона',
  other: 'Котельное хозяйство, очистные сооружения',
  ais: 'Схемы по части - автоматизация инженерных систем',
  aov: 'Схемы по вентиляции',
  rotork: 'Схемы по петлям Rotork на титулах',
  sgoes: 'Схемы по петлям газоанализаторов СГОЭС на титулах',
};

export const Scheme: React.FC = () => {
  const key: key = useParams();
  const section: string = key.section || 'sug';
  const title: string[] = Object.values(Object.fromEntries(Object.entries(name).filter(([key]) => key === section)));
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
