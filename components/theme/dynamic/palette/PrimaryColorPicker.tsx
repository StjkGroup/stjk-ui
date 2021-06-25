import React, { useEffect } from "react";
import { Color } from "react-color";
import { ThemeValueChangeEvent } from "../../events";
import ColorPicker from '../../../ColorPicker';
import {useTheme} from '@material-ui/core/styles';

export interface ColorPickerProps {
  color?: Color
  moveChange?: boolean
  onChange?: (color: Color) => void
  onChangeComplete?: (color: Color) => void
}

const PrimaryColorPicker = ({ color, moveChange=false, onChange, onChangeComplete }: ColorPickerProps) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = React.useState<Color>("#fff");

  useEffect(() => {
    if(color){
      setInputValue(color)
    }else{
      setInputValue(theme.palette.primary.main);
    }
  }, [color])

  const dispatchEvent = (_color: Color) => {
    setTimeout(() => {
      const theme = JSON.parse(localStorage.getItem(ThemeValueChangeEvent().type) || JSON.stringify({}));
      if(theme.palette){
        if(!theme.palette.primary){
          theme.palette.primary = {};
        }
      }else{
        theme.palette = {
          primary: {
          }
        }
      }
      theme.palette.primary.main = _color;
      localStorage.setItem(ThemeValueChangeEvent().type, JSON.stringify(theme));
      document.dispatchEvent(ThemeValueChangeEvent());
    }, 100);
  }

  const handleChange = (_color: Color) => {
    if(moveChange){
      dispatchEvent(_color);
    }
    onChange && onChange(_color);
  }

  const handleChangeComplete = (_color: Color) => {
    if(!moveChange){
      dispatchEvent(_color);
    }
    onChangeComplete && onChangeComplete(_color);
  }

  return (
    <ColorPicker
      color={inputValue}
      onChange={handleChange}
      onChangeComplete={handleChangeComplete}
    />
  )
}

export default PrimaryColorPicker;
