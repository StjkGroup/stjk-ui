import {useTheme as useMuiTheme, Theme as MuiTheme} from "@material-ui/core/styles";
import {LabComponentNameToClassKey} from "@material-ui/lab/themeAugmentation";
import {KuiThemeType} from './kuiTheme';

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
