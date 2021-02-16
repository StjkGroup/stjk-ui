import {Theme} from './theme';

const typography: Theme['components'] = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: 'bold'
      },
      h4: {
        fontSize: '1rem',
        fontWeight: 'bold'
      },
      h5: {
        fontSize: '0.875rem',
        fontWeight: 'bold'
      },
      h6: {
        fontSize: '0.75rem',
        fontWeight: 'bold'
      },
      body1: {
        fontSize: '0.875rem',
      },
      body2: {
        fontSize: '0.75rem',
      },
    }
  }
}

export default typography;