/**
 * Create by fay on 4/22/20 10:27 下午
 */
import {blue, red} from '../../colors';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import paper from './paper';
import snackbar from './snackbar';
import shadows from './shadow';
import button from './button';
import typography from './typography';
import form from './form';
import textField from './text-field';
import menu from './menu';
import select from './select';
import autocomplete from './autocomplete';
import kuiTheme from './kuiTheme';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
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
  spacing: 8,
  components: {
    ...paper,
    ...snackbar,
    ...button,
    ...typography,
    ...form,
    ...textField,
    ...menu,
    ...select,
    ...autocomplete,
  },
  shadows,
});

const ThemeProvider = ({children, theme}: any) => {
  return (
    <MuiThemeProvider theme={{...muiTheme, ...kuiTheme, ...theme}}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
};

export default ThemeProvider;