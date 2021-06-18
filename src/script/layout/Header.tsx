import React from 'react';
// import logo from '../../assets/icons/bandcamp-brands.svg';
import { Navigation } from '../components/Navigation';
import { LogoElement } from '../shared/svgElements';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <a href="./">
        <LogoElement color="white" />
        <h1>Navi</h1>
      </a>
      <span>... ваш помощник по КИП и АСУТП</span>
      <Navigation />
    </div>
  );
};
