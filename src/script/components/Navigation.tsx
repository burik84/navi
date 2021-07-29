import React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContextSource } from '../services/AppContext';
import { getDataFromFile } from '../services/fetchDataJSON';

const Lists: React.FC = (): ReactElement => {
  return (
    <ul className="navigation__menu">
      <li className="item">
        <NavLink className="link" to="/scheme/" activeClassName="active">
          Схемы
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="link" to="/uku/" activeClassName="active">
          УКУ
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="link" to="/kip/" activeClassName="active">
          КИП
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="link" to="/asutp/" activeClassName="active">
          АСУТП
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="link" to="/info/" activeClassName="active">
          Информация
        </NavLink>
      </li>
      <li className="item">
        <NavLink className="link" to="/search" activeClassName="active">
          !Поиск
        </NavLink>
      </li>
    </ul>
  );
};

export const Navigation: React.FC = (): ReactElement => {
  const { isLoad, setIsLoad, setSource } = AppContextSource();
  const handleChange = async (event: any) => {
    try {
      const data = await getDataFromFile(event);
      if (data) {
        setSource(data);
        setIsLoad(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const inputButton = () => (
    <li className="item">
      <input name="myFile" type="file" onChange={handleChange} />
    </li>
  );

  return (
    <nav className="navigation">
      {isLoad && <Lists />}
      {!isLoad && inputButton()}
    </nav>
  );
};
