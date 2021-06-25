import {ThemeFunction} from '../theme';

export const getFormTheme: ThemeFunction = (baseTheme) => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
        '&.Mui-focused': {
          color: baseTheme.palette.primary.main,
          fontWeight: 500
        },
        '&.Mui-error': {
          color: baseTheme.palette.secondary.main,
        },
      }
    }
  },
})
