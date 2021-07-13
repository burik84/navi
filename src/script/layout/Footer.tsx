import React from 'react';
import { LogoElement, LogoGithub } from '../shared/svgElements';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li>
          <Link className="link" to="/main">
            <LogoElement color="white" />
            Главная
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/about">
            О проекте
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/map">
            Карта сайта
          </Link>
        </li>
      </ul>
      <p className="footer__description">
        Надеюсь вы нашли здесь необходимую информацию, если нет{' '}
        <a href="https://yandex.ru/" target="_blank" rel="noreferrer">
          Yandex
        </a>{' '}
        в помощь. Подскажите мне о найденной информации и я добавлю в проект
      </p>
      <div className="footer__author">
        <p>Идея проекта и реализация burikAV.</p>
        <p>Оформление сайта burikAV 2014-2021. </p>
        <p>Версия 5.01.01 от 01 июля 2021.</p>
      </div>
      <a className="footer__link" href="https://github.com/burik84/navi/tree/navi" target="_blank" rel="noreferrer">
        <LogoGithub color="white" />
        Проект
      </a>
    </footer>
  );
};
