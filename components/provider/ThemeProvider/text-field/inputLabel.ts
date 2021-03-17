import {ThemeFunction} from '../theme';

export const getInputLabelTheme: ThemeFunction = () => ({
  MuiInputLabel: {
    styleOverrides: {
      outlined: {
        transform: 'translate(16px, 16px) scale(1)'
      },
      filled: {
        transform: 'translate(16px, 16px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(16px, 6px) scale(0.75)'
        }
      },
    }
  },
})
