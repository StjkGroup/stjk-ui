import {Theme} from './theme';
import {blue, red} from '../../colors';

const form: Theme['overrides'] = {
  MuiFormLabel: {
    root: {
      fontSize: '0.875rem',
      '&.Mui-focused': {
        color: blue[800],
        fontWeight: 500
      },
      '&.Mui-error': {
        color: red[700],
      },
    }
  },
}

export default form;