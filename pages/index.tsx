import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Form from './Form';
import { createStyles, makeStyles, Theme } from '@mui/material/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: 'blue',
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.background}>
      <Form />
    </Box>
  );
};

export default Home;
