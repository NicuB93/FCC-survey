import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 400,
      color: 'white',
    },
    h2: {
      fontWeight: 400,
      color: 'white',
    },
    h3: {
      fontWeight: 400,
      color: 'white',
    },
    h4: {
      fontWeight: 400,
      color: 'white',
      '@media (max-width: 1024px)': {
        fontSize: '1.4rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1.2rem',
      },
    },
    h5: {
      fontWeight: 400,
      color: 'white',
    },
    h6: {
      fontWeight: 400,
      color: 'white',
      '@media (max-width: 1024px)': {
        fontSize: '1.4rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#5d559f',
          padding: '0 2rem 1rem 2rem',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
        iconStandard: {
          color: '#fff',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&::before': {
            borderBottomColor: '#fff',
          },
        },
        underline: {
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'rgba(0,0,50, 0.3)',
          },
        },
        inputMultiline: {
          color: '#000',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#fff',
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
