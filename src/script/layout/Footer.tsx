import React from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';

import { LogoElement, LogoGithub } from '../shared/svgElements';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li className="item">
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
      <div className="footer__author">
        <p>Идея проекта,дизайн и реализация burikAV.</p>
        <p>
          Версия 5.01.01 от 01 сентября 2021. <CopyrightIcon color="primary" /> 2014-2021.{' '}
        </p>
      </div>
      <a className="footer__link" href="https://github.com/burik84/navi/tree/navi" target="_blank" rel="noreferrer">
        <LogoGithub color="white" />
        Проект
      </a>
    </footer>
  );
};
