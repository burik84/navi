import React from 'react';
import { ReactElement } from 'react';
import { Link } from '../shared/htmlElements';

export const Navigation: React.FC = (): ReactElement => {
  return (
    <nav className="navigation">
      <ul>
        <Link href="main" name="Схемы" />
        <Link href="main" name="УКУ" />
        <Link href="main" name="КИП" />
        <Link href="main" name="АСУТП" />
        <Link href="main" name="Информация" />
      </ul>
    </nav>
  );
};
