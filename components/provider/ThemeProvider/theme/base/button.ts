import {ThemeFunction} from './theme';

export const getButtonTheme: ThemeFunction = (baseTheme) => ({
  MuiButton: {
    variants: [{
      props: {variant: 'contained', disabled: true, color: 'primary'},
      style: {
        '&.Mui-disabled': {
          backgroundColor: baseTheme.palette.primary.light,
        },
      },
    },{
      props: {variant: 'outlined', disabled: true, color: 'primary'},
      style: {
        '&.Mui-disabled': {
          color: baseTheme.palette.primary.light,
          borderColor: baseTheme.palette.primary.light,
        },
      },
    },{
      props: {variant: 'text', disabled: true, color: 'primary'},
      style: {
        '&.Mui-disabled': {
          color: baseTheme.palette.primary.light,
        },
      },
    },{
      props: {variant: 'contained', disabled: true, color: 'secondary'},
      style: {
        '&.Mui-disabled': {
          backgroundColor: baseTheme.palette.secondary.light,
        },
      },
    },{
      props: {variant: 'outlined', disabled: true, color: 'secondary'},
      style: {
        '&.Mui-disabled': {
          color: baseTheme.palette.secondary.light,
          borderColor: baseTheme.palette.secondary.light,
        },
      },
    },{
      props: {variant: 'text', disabled: true, color: 'secondary'},
      style: {
        '&.Mui-disabled': {
          color: baseTheme.palette.secondary.light,
        },
      },
    }],
    styleOverrides: {
      
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
      }
    }
  },
})
