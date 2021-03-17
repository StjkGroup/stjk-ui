import {grey} from '../../../colors';
import {ThemeFunction} from '../theme';
import {alpha} from '@material-ui/core/styles';

export const getFilledInputTheme: ThemeFunction = (theme) => ({
  MuiFilledInput: {
    styleOverrides: {
      root: {
        border: `2px solid ${grey[300]}`,
        borderRadius: 4,
        backgroundColor: 'inherit',
        '&.Mui-error': {
          borderColor: theme.palette.secondary.main,
        },
        padding: '0 12px 0 0',
        '&.Mui-focused': {
          backgroundColor: 'inherit',
          borderColor: theme.palette.primary.main,
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          fontWeight: 500,
        },
        '&.Mui-focused.Mui-error': {
          borderColor: theme.palette.secondary.main,
          boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
        },
        '&:hover': {
          backgroundColor: 'inherit',
        },
      },
      input: {
        padding: '17px 16px 5px 12px',
        '&:focus': {
          padding: '16px 15px 4px 10px',
        }
      },
      inputAdornedEnd: {
        '&:focus': {
          // paddingRight: 0,
        }
      }
      ,
      inputAdornedStart: {
        '&:focus': {
          // paddingLeft: 0,
        }
      }
    }
  },
})
