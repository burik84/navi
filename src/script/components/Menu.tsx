import React from 'react';

export const Menu: React.FC = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="">СУГ</a>
        </li>
        <li>
          <a href="">УС</a>
        </li>
        <li>
          <a href="">УХБ</a>
        </li>
        <li>
          <a href="">ИТХ</a>
        </li>
        <li>
          <a href="">УПС</a>
        </li>
        <li>
          Проекты
          <li>
            <a href="">АХЗ</a>
          </li>
          <li>
            <a href="">Вспомогательная</a>
          </li>
          <li>
            <a href="">АИС</a>
          </li>
          <li>
            <a href="">АОВ</a>
          </li>
        </li>
        <li>
          Петли
          <li>
            <a href="">Петли. Rotork</a>
          </li>
          <li>
            <a href="">Петли. СГОЭС</a>
          </li>
        </li>
      </ul>
    </div>
  );
};
