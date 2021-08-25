import React from 'react';
import
  TextField,
  {
    OutlinedTextFieldProps as KuiOutlinedTextFieldProps,
    FilledTextFieldProps as KuiFilledTextFieldProps,
  }
from '../TextField';
import NumberFormat,{NumberFormatProps} from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {grey} from '../colors';
import clsx from 'clsx';
import BigNumber from 'bignumber.js';
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    inputAdornment: {
      display: 'flex',
      flexFlow: 'column',
      marginRight: '-12px',
    },
    iconButton: {
      borderLeft: `1px solid ${grey[300]}`,
      borderRadius: 0,
      padding: "0.9px 0",
    },
    outlinedInput: {
      textAlign: 'right'
    },
    outlinedIconButton: {
      padding: '0.5px 0',
    },
    outlinedIconSmall: {
      width: '0.875em',
      height: '0.875em',
    },
    filledSmallIconButton: {
      padding: '1.5px 0'
    },
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

const withValueLimit = (max?: number, min?: number) => ({floatValue}: {floatValue?: number}) => {
  return floatValue === undefined || ((max === undefined || floatValue <= max) && (min === undefined || floatValue >= min));
}

interface NumberFormatCustomProps extends NumberFormatProps {
  inputRef?: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
  max?: number
  min?: number
}

const NumberFormatCustom: any = React.forwardRef((props: NumberFormatCustomProps, ref: any) => {
  const { inputRef, onChange, thousandSeparator=true, max, min, ...other } = props;

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
      isAllowed={withValueLimit(max, min)}
      thousandSeparator={thousandSeparator}
      isNumericString
    />
  );
});

const KuiNumberField = ({
  variant='outlined',
  InputProps={},
  thousandSeparator,
  disabled,
  className,
  defaultValue,
  value,
  range=1,
  max,
  min,
  onChange,
  size,
  label,
  ...props
}: KuiNumberFieldProps) => {
  const classes = useStyles();
  const [state, setState] = React.useState({value: defaultValue || value || '0'});

  React.useEffect(() => {
    if(value){
      setState({value});
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(onChange){
      onChange(e);
    }else{
      setState({value: e.target.value});
    }
  }

  const handlePlus = () => {
    const currentValue = Number.isNaN(Number(state.value)) ? '0' : Number(state.value)+'';
    const result = new BigNumber(currentValue as string).plus(range).toString();
    if(withValueLimit(max, min)({floatValue: Number(result)})){
      handleChange({target: {value: result}} as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>);
    }
  }

  const handleMinus = () => {
    const currentValue = Number.isNaN(Number(state.value)) ? '0' : Number(state.value)+'';
    const result = new BigNumber(currentValue as string).minus(range).toString();
    if(withValueLimit(max, min)({floatValue: Number(result)})){
      handleChange({target: {value: result}} as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>);
    }
  }

  const endAdornment = (
    <InputAdornment position="end">
      <Box className={classes.inputAdornment}>
        <IconButton
          onClick={handlePlus}
          className={clsx(
            classes.iconButton,
            {[classes.outlinedIconButton]: variant==='outlined'},
            {[classes.filledSmallIconButton]: variant==='filled' && size==='small'},
          )}
          disabled={disabled}
          size={size}
        >
          <KeyboardArrowUpIcon fontSize={size} className={clsx(
            {[classes.outlinedIconSmall]: variant==='outlined' && size==='small'},
          )}/>
        </IconButton>
        <Divider/>
        <IconButton
          onClick={handleMinus}
          className={clsx(
            classes.iconButton,
            {[classes.outlinedIconButton]: variant==='outlined'},
            {[classes.filledSmallIconButton]: variant==='filled' && size==='small'},
          )}
          disabled={disabled}
          size={size}
        >
          <KeyboardArrowDownIcon fontSize={size} className={clsx(
            {[classes.outlinedIconSmall]: variant==='outlined' && size==='small'},
          )}/>
        </IconButton>
      </Box>
    </InputAdornment>
  );
  const {inputProps={}, ...otherInputProps} = InputProps;
  const {className: inputClassName, ...otherinputProps} = inputProps;
  return (
    <TextField
      InputProps={{
        endAdornment,
        inputComponent: NumberFormatCustom,
        inputProps: {
          thousandSeparator,
          className: clsx(
            {[classes.outlinedInput]: variant==='outlined'},
            inputClassName
          ),
          onChange: handleChange,
          max,
          min,
          ...otherinputProps,
        },
        ...otherInputProps,
      }}
      size={size}
      disabled={disabled}
      className={className}
      value={state.value}
      variant={variant}
      label={label}
      {...props}
    />
  );
}

export default KuiNumberField;

export type NumberFieldProps=KuiNumberFieldProps;