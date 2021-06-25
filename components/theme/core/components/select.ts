import {Theme} from '../theme';

const select: Theme['components'] = {
  MuiSelect: {
    styleOverrides: {
      selectMenu: {
        display: 'flex',
        minHeight: '24px'
      },
    }
  }
}

export default select;