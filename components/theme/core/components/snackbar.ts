import {Theme} from '../theme';

const snackbar: Theme['components'] = {
  MuiSnackbar: {
    styleOverrides: {
      anchorOriginTopRight: {
        '@media (min-width: 600px)': {
          top: '60px',
          left: '200px',
        }
      }
    }
  },
}

export default snackbar;