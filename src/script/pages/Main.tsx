import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { colorAdditional } from '../shared/constants';

import logoWindows from '../../assets/icons/windows-brands.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 420,
    },
    list: {
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    primary: {
      color: colorAdditional,
      marginBottom: '.5rem',
      fontSize: '1.8rem',
    },
  }),
);

export const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>О Главном</h2>
        <h3>В общем...</h3>
        <p>
          Нави - это проект, где собраны схемы, инструкции и другую полезную информация для оборудования КИП, АСУТП и
          т.д. Вы находитесь на главной странице. Ниже дана инструкция по использованию нави на ПК. Пожалуйста,
          ознакомтесь с ней, прежде чем задавать вопросы.
        </p>
        <h3>Важно!</h3>
        <p>
          Внутри папки navi, в связи с тем что используются относительные ссылки на название файлов, запрещается:
          <List className={classes.root}>
            <ListItem className={classes.list}>
              <ListItemText
                classes={{
                  primary: classes.primary,
                }}
                primary="переносить папки и файлы"
              />
              <ListItemIcon>
                <WarningIcon color="error" />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.list}>
              <ListItemText
                classes={{
                  primary: classes.primary,
                }}
                primary="переименовывать папки и файлы"
              />
              <ListItemIcon>
                <WarningIcon color="error" />
              </ListItemIcon>
            </ListItem>
          </List>
        </p>
        <h3>Как установить на ...</h3>
        <h4>
          Windows
          <span className="logo">
            <img src={logoWindows} />
          </span>
        </h4>
        <ol>
          <li>Скопировать папку navi на свой ПК в любое удобное место.</li>
          <li>В папке navi/dist для файла index.html создать ярлык в любое удобное место, например, на рабочий стол</li>
          <li>Пользоваться ярлыком</li>
        </ol>
      </main>
    </>
  );
};
