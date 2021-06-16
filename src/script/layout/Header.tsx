import React from 'react';
// import logo from '../../assets/icons/bandcamp-brands.svg';
import { LogoElement } from '../shared/svgElements';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Navi</h1>
      <LogoElement color="white" />
    </div>
  );
};
