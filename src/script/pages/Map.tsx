import React from 'react';
import { Header } from '../layout/Header';

export const Map: React.FC = () => {
  return (
    <>
      <Header />
      <main className="map">
        <h2>Карта сайта</h2>
        <p>В данном разделе схематично представлены разделы сайта.</p>
        <div className="lists">
          <h4>Схемы</h4>
          <ul>
            <li>СУГ</li>
          </ul>
        </div>
        <div className="lists">
          <h4>КИП</h4>
          <ul>
            <li>Анализаторы</li>
          </ul>
        </div>
        <div className="lists">
          <h4>УКУ</h4>
          <ul>
            <li>44.1</li>
          </ul>
        </div>
        <div className="lists">
          <h4>АСУТП</h4>
          <ul>
            <li>Инструкции</li>
          </ul>
        </div>
        <div className="lists">
          <h4>Информация</h4>
          <ul>
            <li>ОТиПБ</li>
          </ul>
        </div>
      </main>
    </>
  );
};
