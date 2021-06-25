/**
 * Create by fay on 4/22/20 10:27 下午
 */
import { ThemeProvider as MuiThemeProvider, createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import greenTheme from '../../theme/green';
import {createTheme} from '../../theme/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import zhCnLocale from 'date-fns/locale/zh-CN';
import { zhCN } from '@material-ui/core/locale';
import {ThemeValueChangeEvent} from '../../theme/events';

const getCustomizedTheme = () => {
  const _themeJSONStr: string | null = localStorage.getItem(ThemeValueChangeEvent().type);
  if(_themeJSONStr){
    const _theme = JSON.parse(_themeJSONStr);
    return _theme;
  }
  return {};
}

const ThemeProvider = ({children, theme={}}: any) => {

  const [dynamicTheme, setDynamicTheme] = React.useState<ThemeOptions>({});

  const onChangeEvent = () => {
    setDynamicTheme(getCustomizedTheme());
  }

  React.useEffect(() => {
    setDynamicTheme(getCustomizedTheme());
    document.addEventListener(ThemeValueChangeEvent().type, onChangeEvent)
    return () => {
      document.removeEventListener(ThemeValueChangeEvent().type, onChangeEvent)
    }
  }, [])

  const _theme: ThemeOptions = {
    ...greenTheme, ...theme, ...dynamicTheme,
    palette: {
      ...greenTheme.palette,
      ...theme.palette,
      ...dynamicTheme.palette,
    }
  }

  return (
    <MuiThemeProvider theme={createTheme(_theme)}>
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