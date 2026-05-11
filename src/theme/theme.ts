import { createTheme, type ThemeOptions } from '@mui/material/styles';

const commonComponents: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        textTransform: 'none',
        fontWeight: 600,
        padding: '10px 24px',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 50,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        transition: 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6F4E37',
      dark: '#4E3524',
      light: '#8B6F5C',
    },
    secondary: {
      main: '#F5F0E8',
    },
    background: {
      default: '#FFFDF9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C1810',
      secondary: '#6F4E37',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: commonComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A0785C',
      dark: '#6F4E37',
      light: '#C4A882',
    },
    secondary: {
      main: '#2C1E16',
    },
    background: {
      default: '#1A1210',
      paper: '#2C1E16',
    },
    text: {
      primary: '#F5F0E8',
      secondary: '#C4A882',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: commonComponents,
});
