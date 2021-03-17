/**
 * Create by fay on 4/22/20 10:27 下午
 */
import { ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import kuiTheme from './kuiTheme';
import {muiTheme} from './theme';

const ThemeProvider = ({children, theme}: any) => {
  return (
    <MuiThemeProvider theme={{...muiTheme, ...kuiTheme, ...theme}}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
};

export default ThemeProvider;