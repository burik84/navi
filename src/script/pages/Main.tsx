import React from 'react';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

import logoWindows from '../../assets/icons/windows-brands.svg';

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>О Главном</h2>
        <h3>В общем...</h3>
        <p>
          Нави - это проект, где собраны схемы, инструкции и другую полезную информация для оборудования КИП, АСУТП и
          т.д. Вы находитесь на главной странице. Ниже дана инструкция по использованию нави на ПК. Пожалуйста,
          ознакомтесь с ней, прежде чем задавать вопросы.
        </p>
        <h3>Важно!</h3>
        <p>
          Внутри папки navi, в связи с тем что используются относительные ссылки на название файлов, запрещается
          переносить папки и файлы; переименовывать папки и файлы.
        </p>
        <h3>Как установить на ...</h3>
        <h4>
          Windows
          <div className="logo">
            <img src={logoWindows} />
          </div>
        </h4>
        <ul>
          <ol>Скопировать папку navi на свой ПК в любое удобное место.</ol>
          <ol>В папке navi открыть файл index.html.</ol>
          <ol>Пользоваться.</ol>
        </ul>
      </main>
    </>
  );
};
