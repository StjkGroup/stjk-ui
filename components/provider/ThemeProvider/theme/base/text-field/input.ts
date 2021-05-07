import {ThemeFunction} from '../theme';

export const getInputTheme: ThemeFunction = () => ({
  MuiInputBase: {
    styleOverrides: {
      root: {
      
      },
      input: {
        fontSize: '0.875rem',
        height: '1.7143em',
      }
    }
  },
})
