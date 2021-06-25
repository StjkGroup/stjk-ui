import React, { useEffect } from "react";
import { ChromePicker, Color } from "react-color";
import MaterialColorPicker from "./MaterialColorPicker";

export interface ColorPickerProps {
  color: Color
  onChange?: (color: Color) => void
  onChangeComplete?: (color: Color) => void
}

/**
 * Creates the ChromePicker and MaterialColorPicker and
 * handles/formats events from ChromePicker
 */
const ColorPicker = ({ color, onChange, onChangeComplete }: ColorPickerProps) => {
  const [inputValue, setInputValue] = React.useState<Color>("#fff");

  useEffect(() => {
    setInputValue(color)
  }, [color])

  const handleChange = (colorObject: any, _event: any) => {
    let _inputValue = '';
    if (colorObject.rgb.a === 1) {
      _inputValue = colorObject.hex;
    } else {
      const rgb = `rgba(${colorObject.rgb.r},${colorObject.rgb.g},${colorObject.rgb.b},${colorObject.rgb.a})`
      _inputValue = rgb;
    }
    setInputValue(_inputValue);
    onChange && onChange(_inputValue);
    return _inputValue;
  }

  const handleChangeComplete = (colorObject: any, event: any) => {
    const colorString = handleChange(colorObject, event)
    onChangeComplete && onChangeComplete(colorString)
  }

  const handleMaterialColorChange = (_color: Color) => {
    onChange && onChange(_color);
    setInputValue(_color);
    onChangeComplete && onChangeComplete(_color);
  }

  return (
    <>
      <MaterialColorPicker
        color={inputValue}
        onChangeComplete={handleMaterialColorChange}
      />
      <ChromePicker
        color={inputValue}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
    </>
  )
}

export default ColorPicker;
