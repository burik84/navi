import React from 'react';
import logo from '../../assets/icons/bandcamp-brands.svg';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Navi</h1>
      <img src={logo} />
    </div>
  );
};
