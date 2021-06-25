import {ThemeFunction} from '../../theme';

export const getInputAdornmentTheme: ThemeFunction = () => ({
  MuiInputAdornment: {
    styleOverrides: {
      filled: {
        '&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)':{
          // marginTop: 0
        }
      },
      positionStart: {
        // marginRight: 0
      }
    }
  }
})
