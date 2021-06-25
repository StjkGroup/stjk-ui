import {ThemeOptions} from "@material-ui/core/styles";
import {LabComponentNameToClassKey} from "@material-ui/lab/themeAugmentation";
import {blue, red} from '../../colors';

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends LabComponentNameToClassKey {}
}

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: blue[500],
      light: blue[100],
    },
    secondary: {
      main: red[700],
      light: red[100],
    },
    common: {
      black: '#131313'
    }
  },
}

// const theme = createTheme(baseTheme);

export default theme;
