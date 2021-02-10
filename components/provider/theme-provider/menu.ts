import {Theme} from './theme';

const outlinedInput: Theme['overrides'] = {
  MuiMenuItem: {
    root: {
      fontSize: '0.875rem',
      margin: '4px 12px',
      paddingTop: '14px',
      paddingBottom: '14px',
      paddingLeft: '12px',
      paddingRight: '12px',
      borderRadius: '4px',
    }
  },
}

export default outlinedInput;