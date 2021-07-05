import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const shemes = [
  ['/scheme/sug', 'СУГ'],
  ['/scheme/us', 'УС'],
  ['/scheme/uhb', 'УХБ'],
  ['/scheme/ith', 'ИТХ'],
  ['/scheme/ups', 'УПС'],
  ['/scheme/ahz', 'АХЗ'],
  ['/scheme/other', 'Вспомогательная'],
  ['/scheme/ais', 'АИС'],
  ['/scheme/aov', 'АОВ'],
  ['/scheme/rotork', 'Петли. Rotork'],
  ['/scheme/sgoes', 'Петли. СГОЭС'],
];

const uku = [
  ['/uku/44_1', '44.1'],
  ['/uku/44_2', '44.2'],
  ['/uku/44_3', '44.3'],
  ['/uku/ppu', 'ППУ'],
  ['/uku/instruction', 'Инструкции и методики проверки'],
];

const kip = [
  ['/kip/analyzer', 'Анализаторы'],
  ['/kip/pressure', 'Давление'],
  ['/kip/rashod', 'Расход'],
  ['/kip/temp', 'Температура'],
  ['/kip/level', 'Уровень'],
  ['/kip/modul', 'Барьеры Модули AI/DI/DO'],
  ['/kip/ibp', 'ИБП'],
  ['/kip/drive', 'Привода, клапаны'],
  ['/kip/enraf', 'Enraf'],
  ['/kip/equip', 'Диагностика'],
  ['/kip/other', 'Разное'],
];
const asutp = [
  ['/asutp/re', 'Инструкции'],
  ['/asutp/centum', 'Centum VP'],
  ['/asutp/prosafe', 'Prosafe RS'],
  ['/asutp/server', "Server's"],
  ['/asutp/siemens', 'Siemens'],
  ['/asutp/stardom', 'Stardom'],
  ['/asutp/hart', 'Hart Modbus RS'],
  ['/asutp/scada', 'Scada'],
];

const info = [
  ['/info/otpb', 'ОТ, ПБ'],
  ['/info/equip', 'Технологическое оборудование, инструкции'],
  ['/info/methodologies', 'Методики проверки'],
  ['/info/map', 'Схемы технологические, карта площадки'],
  ['/info/artic', 'Статьи'],
];

export const Menu: React.FC = () => {
  // const { path, url } = useRouteMatch();
  const listItems = shemes.map((item) => (
    <li key={item[0]}>
      <Link to={item[0]}>{item[1]}</Link>
    </li>
  ));
  return (
    <div className="menu">
      <ul>{listItems}</ul>
    </div>
  );
};
