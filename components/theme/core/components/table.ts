import {ThemeFunction} from '../theme';

export const getTableTheme: ThemeFunction = (baseTheme) => ({
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&.Mui-selected, &.Mui-selected:hover': {
          backgroundColor: baseTheme.palette.primary.light,
        },
      }
    }
  },
})
