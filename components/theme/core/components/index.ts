import {Theme as MuiTheme, createMuiTheme} from "@material-ui/core/styles";
import paper from './paper';
import snackbar from './snackbar';
import {getButtonTheme} from './button';
import typography from './typography';
import {getFormTheme} from './form';
// import {getTextFieldTheme} from './text-field';
import menu from './menu';
import select from './select';
import autocomplete from './autocomplete';
import {getTableTheme} from './table';

const createComponentsTheme = (theme: MuiTheme) => {
  return createMuiTheme({
    ...theme,
    components: {
      ...paper,
      ...snackbar,
      ...getButtonTheme(theme),
      ...typography,
      ...getFormTheme(theme),
      // ...getTextFieldTheme(baseTheme),
      ...menu,
      ...select,
      ...autocomplete,
      ...getTableTheme(theme),
    },
  });
}

export {
  createComponentsTheme,
}
