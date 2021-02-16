import {Theme} from '../theme';
import {blue, grey, red} from '../../../colors';

const outlinedInput: Theme['components'] = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: blue[800],
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: red[700],
        }
      },
      input: {
        padding: '12px 16px',
      },
      // inputAdornedEnd: {
      //   '&:focus': {
      //     paddingRight: 0,
      //   }
      // },
      notchedOutline: {
        borderColor: grey[300]
      }
    }
  },
}

export default outlinedInput;