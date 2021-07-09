import React from 'react';
import { ReactElement } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { printText } from '../services/print';

export const Navigation: React.FC = (): ReactElement => {
  const { path, url } = useRouteMatch();
  printText(path);
  printText(url);

  return (
    <nav className="navigation">
      <ul>
        <li className="item">
          <NavLink className="link" to="/scheme" activeClassName="active">
            Схемы
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/uku" activeClassName="active">
            УКУ
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/kip" activeClassName="active">
            КИП
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/asutp" activeClassName="active">
            АСУТП
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/info" activeClassName="active">
            Информация
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/search" activeClassName="active">
            !Поиск
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
