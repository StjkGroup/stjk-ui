/**
 * Create by fay on 4/22/20 10:27 下午
 */
import { ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import kuiTheme from './kuiTheme';
import {muiTheme} from './theme';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import zhCnLocale from 'date-fns/locale/zh-CN';
import { zhCN } from '@material-ui/core/locale';

const ThemeProvider = ({children, theme}: any) => {
  return (
    <MuiThemeProvider theme={{...muiTheme, ...kuiTheme, ...theme, zhCN}}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhCnLocale}>
        {children}
      </LocalizationProvider>
    </MuiThemeProvider>
  )
};

export default ThemeProvider;