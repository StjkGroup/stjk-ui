import {useTheme as useMuiTheme, Theme as MuiTheme, createMuiTheme} from "@material-ui/core/styles";
import {LabComponentNameToClassKey} from "@material-ui/lab/themeAugmentation";
import {Theme} from '../base/theme';
import {blue, red} from '../../../../colors';
import shadows from '../base/shadow';
import paper from '../base/paper';
import snackbar from '../base/snackbar';
// import button from '../base/button';
import typography from '../base/typography';
import {getFormTheme} from '../base/form';
// import {getTextFieldTheme} from '../base/text-field';
import menu from '../base/menu';
import select from '../base/select';
import autocomplete from '../base/autocomplete';
import {getTableTheme} from '../base/table';

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends LabComponentNameToClassKey {}
}

type useMyTheme = <T = Theme>() => T;

const useTheme: useMyTheme = useMuiTheme;

const baseTheme: MuiTheme = createMuiTheme({
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
})

const muiTheme = createMuiTheme({
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

export default muiTheme;

export {
  useTheme,
  baseTheme,
  muiTheme
}
