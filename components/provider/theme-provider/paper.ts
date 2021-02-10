import {Theme} from './theme';

const paper: Theme['overrides'] = {
  MuiPaper: {
    rounded: {
      borderRadius: '6px'
    },
  }
}

export default paper;