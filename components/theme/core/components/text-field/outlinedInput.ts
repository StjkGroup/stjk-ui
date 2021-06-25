import {ThemeFunction} from '../../theme';

export const getOutlinedInputTheme: ThemeFunction = () => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          // borderColor: baseTheme.palette.primary.main,
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          // borderColor: baseTheme.palette.secondary.main,
        }
      },
      input: {
        // padding: '12px 16px',
      },
      // inputAdornedEnd: {
      //   '&:focus': {
      //     paddingRight: 0,
      //   }
      // },
      notchedOutline: {
        // borderColor: grey[300]
      }
    }
  },
})
