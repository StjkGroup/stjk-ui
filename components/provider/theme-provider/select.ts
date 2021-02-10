import {Theme} from './theme';

const select: Theme['overrides'] = {
  MuiSelect: {
    selectMenu: {
      display: 'flex',
      minHeight: '24px'
    },
  }
}

export default select;