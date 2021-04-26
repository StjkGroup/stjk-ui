import {useTheme as useMuiTheme, Theme as MuiTheme, createMuiTheme} from "@material-ui/core/styles";
import {LabComponentNameToClassKey} from "@material-ui/lab/themeAugmentation";
import {KuiThemeType} from './kuiTheme';
import {green, red} from '../../colors';
import shadows from './shadow';
import paper from './paper';
import snackbar from './snackbar';
// import button from './button';
import typography from './typography';
import {getFormTheme} from './form';
// import {getTextFieldTheme} from './text-field';
import menu from './menu';
import select from './select';
import autocomplete from './autocomplete';
import {getTableTheme} from './table';

interface MyTheme extends MuiTheme{
  
}

interface MyTheme extends KuiThemeType{
  
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends LabComponentNameToClassKey {}
}

type useMyTheme = <T = MyTheme>() => T;

export const useTheme: useMyTheme = useMuiTheme;

export type Theme = MyTheme;

export type ThemeFunction = (baseTheme: MuiTheme) => Theme['components'];

export const baseTheme: MuiTheme = createMuiTheme({
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
})

export const muiTheme = createMuiTheme({
  ...baseTheme,
  spacing: 8,
  shadows,
  components: {
    ...paper,
    ...snackbar,
    // ...button,
    ...typography,
    ...getFormTheme(baseTheme),
    // ...getTextFieldTheme(baseTheme),
    ...menu,
    ...select,
    ...autocomplete,
    ...getTableTheme(baseTheme),
  },
});
