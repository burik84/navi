import React, { useState } from 'react';

import { TextField, createStyles, makeStyles, Theme, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Header } from '../layout/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '42rem',
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // width: '25ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const str = String(searchValue);
    setSearchTerm(str);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const str = searchTerm.toLowerCase();
    setSearch(str);
    setSearchTerm('');
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <main>
        <h2 className="hidden">Поиск</h2>
        <div className="search">
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
            <TextField
              autoFocus
              label="Search through site content"
              type="search"
              margin="normal"
              fullWidth
              color="primary"
              value={searchTerm}
              onChange={handleOnInputChange}
            />
            <Button
              variant="outlined"
              color="primary"
              className={classes.margin}
              type="submit"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </form>
        </div>
        <div className="results">
          <h4>
            Результаты запросы <span>{search}</span>
          </h4>
        </div>
      </main>
    </>
  );
};
