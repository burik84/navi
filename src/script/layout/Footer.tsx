import React from 'react';
import { LogoElement, LogoGithub } from '../shared/svgElements';
import { Link } from '../shared/htmlElements';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="menu">
        <li>
          <a href="#">
            <LogoElement color="white" />
            Главная
          </a>
        </li>
        <Link href="about" name="О проекте" />
        <Link href="map" name="Карта сайта" />
      </ul>
      <p className="footer_description">
        Надеюсь вы нашли здесь необходимую информацию, если нет <a href="https://yandex.ru/">Yandex </a> в помощь.
        Подскажите мне о найденной информации и я добавлю в проект
      </p>
      <div>
        <p>Идея проекта и реализация burikAV. Оформление сайта burikAV 2014-2021. </p>
        <p>Версия 5.01.01 от 01 июля 2021.</p>
      </div>
      <a href="https://github.com/burik84/navi/tree/navi">
        <LogoGithub color="white" />
        Проект
      </a>
    </div>
  );
};
