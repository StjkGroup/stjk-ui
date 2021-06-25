import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Popover from "@material-ui/core/Popover";
import { Color } from "react-color";
import { colorFromString } from "./utils";
import ColorPicker from '@/../components/theme/dynamic/palette/PrimaryColorPicker';

const useStyles = makeStyles(() =>
  createStyles({
    popoverPaper: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 0,
      alignItems: "center",
    },
    colorSampleAdornment: {
      width: "1em",
      height: "1em",
      border: "1px solid grey",
    },
  })
)

/**
 * The base TextField input for selecting colors.
 * onClick opens a popover with components to help pick colors
 */
export default function ColorInput({ label, color, onColorChange }: any) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleOpenPopover = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const handleColorChange = (value: Color) => onColorChange(value)

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedText = event.clipboardData.getData("text")
    const color = colorFromString(pastedText)
    if (color) {
      handleColorChange(color)
    }
  }

  const popoverOpen = Boolean(anchorEl);
  
  return (
    <div>
      <TextField
        label={label}
        onClick={handleOpenPopover}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <div
                className={classes.colorSampleAdornment}
                style={{
                  backgroundColor: color,
                }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
        size="small"
        value={color}
        onPaste={handlePaste}
      />
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        PaperProps={{
          className: classes.popoverPaper,
        }}
        disableAutoFocus
        disableEnforceFocus
      >
        <ColorPicker />
      </Popover>
    </div>
  )
}
