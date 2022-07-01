import { createTheme } from '@material-ui/core/styles';
export { ThemeProvider } from '@material-ui/core/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(265, 83%, 45%)',
    },
    secondary: {
      main: 'hsl(47, 100%, 68%)',
    },
    error: {
      main: 'hsl(357, 100%, 55%)',
    },
    success: {
      main: 'hsl(122, 67%, 48%)',
    },
  },
});
