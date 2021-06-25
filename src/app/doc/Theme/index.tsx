import React from "react";
import ColorInput from "./ColorInput";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import Pagination from "@material-ui/core/TablePagination";
import {useTheme} from "@material-ui/core/styles";
// import DatePicker from "@material-ui/lab/DatePicker";
// import TextField from "@material-ui/core/TextField";
// import { ThemeValueChangeEvent } from "./events";
import {resetTheme} from '@/../components/theme/dynamic/utils';
import ModeSwitch from '@/../components/theme/dynamic/palette/ModeSwitch';
// import { setThemeOption, removeThemeOption } from "src/state/actions"
// import {
//   Grid,
//   Typography,
//   Button,
//   makeStyles,
//   createStyles,
// } from "@material-ui/core"
// import { useThemeValue, useThemeValueInfo } from "src/state/selectors"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     resetButton: {
//       textTransform: "capitalize",
//     },
//     disabledButton: {
//       fontStyle: "italic",
//     },
//   })
// )

export default function PaletteInput({ label }: any) {
  // const classes = useStyles();
  // const themeValueInfo = useThemeValueInfo(path)
  // const dispatch = useDispatch()
  const [color, setColor] = React.useState('');
  // const [date, setDate] = React.useState();
  const theme = useTheme();

  const handleColorChange = (_color: string) => {
    setColor(_color);
    // localStorage.setItem(ThemeValueChangeEvent().type, _color);
    // document.dispatchEvent(ThemeValueChangeEvent());
  }

  // const handleReset = useCallback(() => dispatch(removeThemeOption(path)), [
  //   dispatch,
  // ])

  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  console.log(theme.palette.primary.light);
  console.log(theme.palette.secondary.main);
  console.log(theme.palette.secondary.light);

  return (
    <Grid container sx={{margin: 4}}>
      <Grid item>
        <ColorInput
          label={label}
          color={color}
          onColorChange={handleColorChange}
        />
      </Grid>
      <Grid item sx={{marginTop: 40}}>
        <Button>主题色</Button>
        <Button
          size="small"
          // disabled={!themeValueInfo.modifiedByUser}
          // classes={{
          //   root: classes.resetButton,
          //   disabled: classes.disabledButton,
          // }}
          onClick={resetTheme}
        >
          Reset
        </Button>
        <div style={{color: theme.palette.primary.light}}>123123123</div>
        <div style={{color: theme.palette.secondary.main}}>123123123</div>
        <div style={{color: theme.palette.secondary.light}}>123123123</div>
        {/* <DatePicker
          label="开始时间"
          value={date}
          // inputFormat={dateFormat}
          onChange={(value) => setDate(value)}
          clearable
          // mask={mask}
          renderInput={(params) => <TextField {...params} size={'small'} helperText={null}/>}
        /> */}
        {/* <Pagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        <ModeSwitch/>
      </Grid>
    </Grid>
  )
}
