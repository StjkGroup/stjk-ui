import {useTheme as useMuiTheme, Theme as MuiTheme, createMuiTheme, ThemeOptions} from "@material-ui/core/styles";
import {createComponentsTheme} from './components';
import shadows from './shadows';

interface MyTheme extends MuiTheme{
  
}

interface MyTheme extends ThemeType{
  
}

type useMyTheme = <T = Theme>() => T;

export const useTheme: useMyTheme = useMuiTheme;

export type Theme = MyTheme;

export type ThemeFunction = (baseTheme: MuiTheme) => Theme['components'];

export interface ThemeType{
  charts: {
    color: string,
    series: {
      color: string
    },
    colors: {
      orange: {
        main: string,
        light: string
      },
      skyBlue: {
        main: string,
        light: string
      },
      purple: {
        main: string,
        light: string
      },
      blue: {
        main: string,
        light: string
      },
      cyan: {
        main: string,
        light: string
      },
    }
  },
  colors: {
    blue: string,
    skyBlue: string,
    green: string,
    red: string,
    orange: string,
    deepOrange: string,
    grey: string,
    deepGrey: string,
    purple: string,
    cyan: string,
  }
}

const theme: ThemeType = {
  charts: {
    color: '#008AFF3D',
    series: {
      color: '#008AFF'
    },
    colors: {
      orange: {
        main: '#FFA200',
        light: '#FFB33A3D'
      },
      skyBlue: {
        main: '#23B4FF',
        light: '#23B4FF3D'
      },
      purple: {
        main: '#B134FF',
        light: '#B134FF3D'
      },
      blue: {
        main: '#4278FF',
        light: '#4278FF3D'
      },
      cyan: {
        main: '#00CDF0',
        light: '#3BFFE33D'
      },
    }
  },
  colors: {
    blue: '#0062FF',
    skyBlue: "#23B4FF",
    green: '#0CC73B',
    red: '#D70D26',
    orange: '#FFA200',
    deepOrange: '#C67E00',
    grey: '#BDBDBD',
    deepGrey: '#757575',
    purple: '#B134FF',
    cyan: '#00CDF0',
  }
};

export const createTheme = (theme: ThemeOptions) => {
  const baseTheme = createMuiTheme({
    spacing: 8,
    shadows,
    ...theme,
  });
  return createComponentsTheme(baseTheme);
}

export default theme;
