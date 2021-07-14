import React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = (): ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
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
