/**
 * Create by fay on 4/22/20 10:27 下午
 */
import { ThemeProvider as MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import cutomizedTheme from './theme/base/theme';
import {muiTheme} from './theme/green';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import zhCnLocale from 'date-fns/locale/zh-CN';
import { zhCN } from '@material-ui/core/locale';

const ThemeProvider = ({children, theme}: any) => {
  return (
    <MuiThemeProvider theme={{...muiTheme, ...cutomizedTheme, ...theme}}>
      <MuiThemeProvider theme={(outerTheme) => createMuiTheme(outerTheme, zhCN)}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhCnLocale}>
          {children}
        </LocalizationProvider>
      </MuiThemeProvider>
    </MuiThemeProvider>
  )
};

export default ThemeProvider;