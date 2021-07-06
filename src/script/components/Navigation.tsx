import React from 'react';
import { ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const Navigation: React.FC = (): ReactElement => {
  const { path, url } = useRouteMatch();
  return (
    <nav className="navigation">
      path - {path}
      url - {url}
      <ul>
        <li className="item">
          <Link className="link" to="/scheme">
            Схемы
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/uku">
            УКУ
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/kip">
            КИП
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/asutp">
            АСУТП
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/info">
            Информация
          </Link>
        </li>
      </ul>
    </nav>
  );
};
