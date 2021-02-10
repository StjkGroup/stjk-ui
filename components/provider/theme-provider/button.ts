import {Theme} from './theme';

const button: Theme['overrides'] = {
  MuiButton: {
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
  },
  MuiIconButton: {
    root: {
      borderRadius: '4px',
      padding: '4px'
    }
  },
}

export default button;