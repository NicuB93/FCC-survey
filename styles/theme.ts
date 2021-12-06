import { createTheme } from '@mui/material';
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19875b',
    },
    warning: {
      main: '#ffa726',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
