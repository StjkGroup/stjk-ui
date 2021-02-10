import React from 'react';
import TextField, {BaseTextFieldProps as MuiBaseTextFieldProps} from '@material-ui/core/TextField';
import { FilledInputProps } from '@material-ui/core/FilledInput';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '../IconButton';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    startAdornmentLabel: {
      transform: 'translate(46px, 16px) scale(1)',
      '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
        transform: 'translate(46px, 6px) scale(1)',
      }
    },
    cancelIconButton: {
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    cancelIcon: {
      width: '0.65em',
      height: '0.65em',
    }
  }),
);

export interface FilledTextFieldProps extends MuiBaseTextFieldProps {
  onBlur?: FilledInputProps['onBlur'];
  onChange?: FilledInputProps['onChange'];
  onFocus?: FilledInputProps['onFocus'];
  variant: 'filled';
  InputProps?: Partial<FilledInputProps>;
  inputProps?: FilledInputProps['inputProps'];
  onSearch?: (value: unknown) => void
}

export interface OutlinedTextFieldProps extends MuiBaseTextFieldProps {
  onBlur?: OutlinedInputProps['onBlur'];
  onChange?: OutlinedInputProps['onChange'];
  onFocus?: OutlinedInputProps['onFocus'];
  variant?: 'outlined';
  InputProps?: Partial<OutlinedInputProps>;
  inputProps?: OutlinedInputProps['inputProps'];
  onSearch?: (value: unknown) => void
}

export type KuiTextFieldProps = OutlinedTextFieldProps | FilledTextFieldProps;

const KuiTextField = ({
  variant='outlined',
  color='primary',
  InputProps,
  defaultValue,
  value,
  onChange,
  disabled,
  InputLabelProps,
  onSearch,
  ...props
}: KuiTextFieldProps) => {
  const classes = useStyles();

  const [state, setState] = React.useState<any>({value: value || defaultValue});
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const inputRef = React.useRef<any>();

  React.useEffect(() => {
    setState({value});
  }, [value]);

  const handleClickClear = () => {
    setState({value: ''});
    if(onChange){
      const event: any = {target: {value: ''}};
      onChange(event);
    }else{
      // console.log(inputRef.current);
      // console.log(inputRef.current.value);
      // inputRef.current.value='';
      // console.log(inputRef.current.value);
    }
  }

  const handleKeypress = (e: any) => {
    if(e.keyCode === 13){
      onSearch && onSearch(state.value);
    }
  }

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleChange = (event: any) => {
    if(onChange){
      onChange(event);
    }else{
      setState({value: event.target.value});
    }
  }

  const handleBlur = () => {
    setFocus(false);
  }

  const handleFocus = () => {
    setFocus(true);
  }

  const shrink = Boolean((state.value && state.value.length > 0) || focus);

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        onClick={handleClickClear}
        className={classes.cancelIconButton}
        disabled={disabled}
      >
        {state.value && state.value.length > 0 && (focus || hover) && !disabled ? <CancelIcon className={classes.cancelIcon}/> : <div className={classes.cancelIcon}/>}
      </IconButton>
    </InputAdornment>
  );
  
  const textFieldProps = {
    variant, color,
    defaultValue,
    value,
    onChange: handleChange,
    disabled,
    InputLabelProps: {shrink, className: clsx({[classes.startAdornmentLabel]: Boolean(InputProps && InputProps.startAdornment)}), ...InputLabelProps},
    onBlur: handleBlur,
    onFocus: handleFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    inputRef,
    onKeyUp: handleKeypress,
    ...props
  };

  if(variant === 'filled'){
    return (
      <TextField
        InputProps={{
          disableUnderline: true,
          endAdornment,
          ...InputProps
        } as Partial<OutlinedInputProps>}
        {...textFieldProps}
      />
    );
  }
  return (
    <TextField
      InputProps={{
        endAdornment,
        ...InputProps
      }}
      {...textFieldProps}
    />
  );
}

export default KuiTextField;

export type TextFieldProps=KuiTextFieldProps;