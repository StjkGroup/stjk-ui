import {Theme} from './theme';

const button: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "inherit",
        padding: '8px 24px'
      },
      outlined: {
        padding: '8px 24px',
      },
      text: {
        padding: '8px 24px'
      },
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
        padding: '4px'
      }
    }
  },
}

export default button;