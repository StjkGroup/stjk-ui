import {Theme} from '../theme';

const paper: Theme['components'] = {
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: '6px'
      },
    }
  }
}

export default paper;