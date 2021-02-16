import {Theme} from './theme';

const autocomplete: Theme['components'] = {
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          padding: '2.5px 16px'
        }
      }
    }
  }
}

export default autocomplete;