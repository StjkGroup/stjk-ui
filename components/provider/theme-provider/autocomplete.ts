import {Theme} from './theme';

const autocomplete: Theme['overrides'] = {
  MuiAutocomplete: {
    inputRoot: {
      '&[class*="MuiOutlinedInput-root"]': {
        padding: '2.5px 16px'
      }
    }
  }
}

export default autocomplete;