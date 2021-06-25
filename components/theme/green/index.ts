import {ThemeOptions} from "@material-ui/core/styles";
import {LabComponentNameToClassKey} from "@material-ui/lab/themeAugmentation";
import {green, red} from '../../colors';
// import {createTheme} from '../core';

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends LabComponentNameToClassKey {}
}

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: green[900],
      light: green[100],
    },
    secondary: {
      main: red[700],
      light: red[100],
    },
    common: {
      black: '#131313'
    }
  },
};

// const theme = createTheme(baseTheme);

export default theme;
