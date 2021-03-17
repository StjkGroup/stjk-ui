import React from 'react';
import
  TextField,
  {
    OutlinedTextFieldProps as KuiOutlinedTextFieldProps,
    FilledTextFieldProps as KuiFilledTextFieldProps,
  }
from '../TextField';
import NumberFormat from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '../IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {grey} from '../colors';
import clsx from 'clsx';
import BigNumber from 'bignumber.js';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      // paddingRight: 0
    },
    inputAdornment: {
      flexFlow: 'column',
      alignSelf: 'flex-start',
      marginRight: '-12px',
    },
    keyboardArrowUpIcon: {
      borderBottom: `1px solid ${grey[300]}`,
    },
    keyboardArrowDownIcon: {
      marginTop: '-2px',
    },
    iconButton: {
      borderLeft: `1px solid ${grey[300]}`,
      borderRadius: 0,
      padding: 0,
    },
    outlinedInput: {
      textAlign: 'right'
    }
  }),
);

export interface OutlinedTextFieldProps extends KuiOutlinedTextFieldProps {
  thousandSeparator?: boolean
  range?: number
  max?: number
  min?: number
}

export interface FilledTextFieldProps extends KuiFilledTextFieldProps {
  thousandSeparator?: boolean
  range?: number
  max?: number
  min?: number
}

export type KuiNumberFieldProps = OutlinedTextFieldProps | FilledTextFieldProps;


interface NumberFormatCustomProps {
  inputRef?: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
  thousandSeparator?: boolean
}

const NumberFormatCustom: any = React.forwardRef((props: NumberFormatCustomProps, ref: any) => {
  const { inputRef, onChange, thousandSeparator=true, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator={thousandSeparator}
      isNumericString
    />
  );
});

const KuiNumberField = ({
  variant,
  InputProps={},
  thousandSeparator,
  disabled,
  className,
  value,
  range=1,
  max,
  min,
  onChange,
  ...props
}: KuiNumberFieldProps) => {
  const classes = useStyles();
  const [state, setState] = React.useState({value: value || '0'});

  React.useEffect(() => {
    if(value){
      setState({value});
    }
  }, [value]);

  const handleChange = (e: any) => {
    if(onChange){
      onChange(e);
    }else{
      setState({value: e.target.value});
    }
  }

  const handlePlus = () => {
    const currentValue = Number.isNaN(Number(state.value)) ? '0' : state.value;
    const plusResult = new BigNumber(currentValue as string).plus(range).toString();
    if(max === undefined || Number(plusResult) < max){
      setState({value: plusResult});
    }
  }

  const handleMinus = () => {
    const currentValue = Number.isNaN(Number(state.value)) ? '0' : state.value;
    const plusResult = new BigNumber(currentValue as string).minus(range).toString();
    if(min === undefined || Number(plusResult) < min){
      setState({value: plusResult});
    }
  }

  const endAdornment = (
    <InputAdornment position="end" className={classes.inputAdornment}>
      <IconButton
        onClick={handlePlus}
        className={classes.iconButton}
        disabled={disabled}
      >
        <KeyboardArrowUpIcon className={classes.keyboardArrowUpIcon}/>
      </IconButton>
      <IconButton
        onClick={handleMinus}
        className={classes.iconButton}
        disabled={disabled}
      >
         <KeyboardArrowDownIcon className={classes.keyboardArrowDownIcon}/>
      </IconButton>
    </InputAdornment>
  );
  return (
    <TextField
      InputProps={{
        endAdornment,
        ...InputProps,
        inputComponent: NumberFormatCustom,
        inputProps: {thousandSeparator, className: clsx({[classes.outlinedInput]: variant==='outlined'}), ...InputProps.inputProps}
      }}
      disabled={disabled}
      className={clsx(classes.root, className)}
      value={state.value}
      onChange={handleChange}
      variant={variant}
      {...props}
    />
  );
}

export default KuiNumberField;

export type NumberFieldProps=KuiNumberFieldProps;