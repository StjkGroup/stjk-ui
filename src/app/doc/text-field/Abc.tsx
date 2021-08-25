import React from 'react';
import {makeStyles} from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import DateTimePicker from '@material-ui/lab/DateTimePicker';

const dateFormat = 'yyyy-MM-dd HH:mm';
// const mask = '____-__-__ __:__ _m';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const TextFieldDoc = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(new Date());

  const handleChange = (date: any) => {
    setValue(date);
  }

  return (
    <div className={classes.root}>
      
      <DateTimePicker
        label="预计开播开始时间 *"
        value={value}
        inputFormat={dateFormat}
        onChange={handleChange}
        clearable
        // mask={mask}
        // maxDate={expectedEndDateTime}
        // maxTime={expectedStartDateTimeMaxTime}
        // minDate={now}
        // minTime={expectedStartDateTimeMinTime}
        renderInput={(params) => <TextField {...params} size={'small'} helperText={null}/>}
      />
    </div>
  )
};

export default TextFieldDoc;