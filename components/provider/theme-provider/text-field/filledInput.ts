import {Theme} from '../theme';
import {blue, grey, red} from '../../../colors';

const filledInput: Theme['overrides'] = {
  MuiFilledInput: {
    root: {
      border: `1px solid ${grey[300]}`,
      borderRadius: 4,
      backgroundColor: 'inherit',
      '&.Mui-error': {
        borderColor: red[700],
      },
      '&.Mui-focused': {
        backgroundColor: 'inherit',
        borderColor: blue[800],
        borderWidth: '2px',
        fontWeight: 500
      },
      '&.Mui-focused.Mui-error': {
        borderColor: red[700],
      },
      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    input: {
      padding: '17px 16px 5px 16px',
      '&:focus': {
        padding: '16px 15px 4px 15px',
      }
    },
    inputAdornedEnd: {
      '&:focus': {
        paddingRight: 0,
      }
    }
    ,
    inputAdornedStart: {
      '&:focus': {
        paddingLeft: 0,
      }
    }
  },
}

export default filledInput;