import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: { 
    fontFamily: '"Public Sans Variable", "sans-serif"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Public Sans Variable", "sans-serif"',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#246AA3',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
}
});