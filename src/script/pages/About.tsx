import React from 'react';
import { Link } from '@material-ui/core';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const About: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className="about">
        <h2>О проекте</h2>
        <p className="lead">
          Нави - это проект, где собраны схемы, инструкции и прочая полезная информация по оборудованию КИП и АСУТП
        </p>
        <p>
          Новый проект НАВИ основывается на опыте пользования предыдущих версий навигатора, которые помогали в работе.
        </p>
        <p>При работе с НАВИ не требуется интернет, все файлы расположены локально!!!</p>
        <p>
          С новой версии добавление новой информации в проект будет занимать намного меньше времени и сам процесс
          становится легче
        </p>
        <p>
          Главной целью проекта является использования навигатора для поиска необходимой информации по всем схемам и
          инструкциям - цель стало чуть ближе с появлением в проекте алгоритма поиска по доступной информации.
        </p>
        <p>Второй целью было - получить удобный интерфейс пользования</p>
        <h3>Текущая версия 5.01.04 от 03.04.2023</h3>
        <p>Добавлены новые инструкции</p>
        <p>Обновлен год</p>
        <h3>Текущая версия 5.01.03 от 15.10.2022</h3>
        <p>Исправлены опечатки в описании</p>
        <p>Обновлены текущие схемы до актуальных версий - компрессора К1, АВО на 204.1</p>
        <p>Добавлены новые инструкции - Cisco, ИАС, информация про Modbas, siemens и другие</p>
        <p>Добавлены карты и описание Modbas для Стендеров, Обогрев, узлы учета топливного газа и другие</p>
        <p>Добавлены новый проект - Система загазованности. Реконструкция в резервуарном парке храненеия СУГ.</p>
        <h3>Текущая версия 5.01.02 от 26.01.2022</h3>
        <p>Исправлены опечатки в названии файлов или описании</p>
        <p>Обновлены пункты меню</p>
        <p>Добавлены новые схемы и инструкции</p>
        <h3>О версии 5.01.01 от 01.09.2021</h3>
        <p>Добавлена новая информация. Стало еще больше нового</p>
        <p>Изменилась архитектура проекта, используется сборщик проекта.</p>
        <p>Не требуется внесение изменений в проект и новой сборки проекта при добавление новых файлов.</p>
        <p>Реализован поиск по доступной информации</p>
        <h3>О версии 4.19.01 от 01.2019</h3>
        <p>Добавлены новая информация по проектам и обновлены инструкции КИП</p>
        <p>Изменили структуру отображения информации на ресурсе, исправлены ошибки в разделах.</p>
        <h3>О версии 4.18.02</h3>
        <p>Вышла новая версия, в которой устранены ошибки в наименованииях файлов и папок.</p>
        <p>И конечно обновлена новая информация.</p>
        <h3>О версии 4.18</h3>
        <p>
          Для реализации поставленной цели использовал библиотеку стилей - bootstrap ver.4. Все иконки от FontAwesome
        </p>
        <p>Первый прототип Нави</p>
        <h4>И немного об использование</h4>
        <p>
          Запрещено использовать данный проект в коммерческих целях (т.е. получение прибыли) без письменного разрешения
          правообладателя - <Link href="mailto:burikAV@yandex.ru">burikAV</Link>
        </p>
        <p className="about__description">
          Надеюсь вы нашли здесь необходимую информацию, если нет{' '}
          <a href="https://yandex.ru/" target="_blank" rel="noreferrer">
            Yandex
          </a>{' '}
          в помощь. Подскажите мне о найденной информации и я добавлю в проект
        </p>
      </main>
    </>
  );
};
