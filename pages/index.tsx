import type { NextPage } from 'next';
import Form from '../src/components/Form';
import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const H4 = styled(Typography)`
  text-align: center;
  margin: 0;
  padding: 1rem 0;
`;

const Home: NextPage = () => {
  return (
    <div>
      <H4 variant="h4" color="secondary">
        freeCodeCamp Survey Form
      </H4>
      <Form />
    </div>
  );
};

export default Home;
