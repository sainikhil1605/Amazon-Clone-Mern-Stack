import { createTheme } from '@material-ui/core';

const muitheme = createTheme({
  typography: {
    h1: {
      fontSize: '1rem',
      fontWeight: '400',
      margin: '0px',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default muitheme;
