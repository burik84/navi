import React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = (): ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="item">
          <NavLink className="link" to="/scheme/sug" activeClassName="active">
            Схемы
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/uku/44_1" activeClassName="active">
            УКУ
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/kip/analyzer" activeClassName="active">
            КИП
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/asutp/re" activeClassName="active">
            АСУТП
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/info/otpb" activeClassName="active">
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
