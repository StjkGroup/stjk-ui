import {ThemeFunction} from '../../theme';
import {getInputTheme} from './input';
import {getInputLabelTheme} from './inputLabel';
import {getFilledInputTheme} from './filledInput';
import {getOutlinedInputTheme} from './outlinedInput';
import {getInputAdornmentTheme} from './inputAdornment';


export const getTextFieldTheme: ThemeFunction = (baseTheme) => ({
  ...getInputTheme(baseTheme),
  ...getInputLabelTheme(baseTheme),
  ...getFilledInputTheme(baseTheme),
  ...getOutlinedInputTheme(baseTheme),
  ...getInputAdornmentTheme(baseTheme),
})