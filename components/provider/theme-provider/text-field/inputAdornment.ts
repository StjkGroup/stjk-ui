import {Theme} from '../theme';

const inputAdornment: Theme['overrides'] = {
  MuiInputAdornment: {
    filled: {
      '&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)':{
        marginTop: 0
      }
    },
    positionStart: {
      marginRight: 0
    }
  }
}

export default inputAdornment;