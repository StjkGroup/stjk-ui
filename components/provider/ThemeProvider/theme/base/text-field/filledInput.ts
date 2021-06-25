import {grey} from '../../../../../colors';
import {ThemeFunction} from '../theme';

export const getFilledInputTheme: ThemeFunction = (theme) => ({
  MuiFilledInput: {
    styleOverrides: {
      root: {
        border: `1px solid ${grey[300]}`,
        borderRadius: 4,
        backgroundColor: 'inherit',
        '&.Mui-error': {
          borderColor: theme.palette.secondary.main,
        },
        '&.Mui-focused': {
          backgroundColor: 'inherit',
          borderColor: theme.palette.primary.main,
          fontWeight: 500,
        },
        '&.Mui-focused.Mui-error': {
          borderColor: theme.palette.secondary.main,
        },
        '&:hover': {
          backgroundColor: 'inherit',
        },
      },
      input: {
        paddingLeft: '10px',
        paddingBottom: 4,
        '&:focus': {
        }
      },
      inputAdornedEnd: {
        '&:focus': {
        }
      }
      ,
      inputAdornedStart: {
        '&:focus': {
        }
      }
    }
  },
})
