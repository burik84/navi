import React from 'react';
import { ReactElement } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { AppContextSource } from '../services/AppContext';
import { getDataFromFile } from '../services/fetchDataJSON';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const ButtonInput: React.FC = (): ReactElement => {
  const classes = useStyles();

  const { setIsLoad, setSource } = AppContextSource();
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

  return (
    <div className={classes.root}>
      <input accept=".json" className={classes.input} id="icon-button-file" type="file" onChange={handleChange} />
      <label htmlFor="icon-button-file">
        <Button variant="contained" color="primary" component="span" startIcon={<SaveIcon />}>
          Upload
        </Button>
      </label>
    </div>
  );
};
