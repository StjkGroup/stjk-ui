import React from 'react';
import TextField, {BaseTextFieldProps as MuiBaseTextFieldProps} from '@material-ui/core/TextField';
import { FilledInputProps } from '@material-ui/core/FilledInput';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { InputProps as StandardInputProps } from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    startAdornmentLabel: {
      transform: 'translate(46px, 16px) scale(1)',
      '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(16px, -6px) scale(0.75)',
      },
      '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
        transform: 'translate(49px, 6px) scale(0.75)',
      }
    },
    startAdornmentLabelOutlinedSmall: {
      transform: 'translate(46px, 10px) scale(1)',
    },
    startAdornmentLabelFilledSmall: {
      transform: 'translate(46px, 14px) scale(1)',
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
    },
    filledinputNoLabel: {
      paddingTop: 15,
      paddingBottom: 14,
    },
    filledinputNoLabelSmall: {
      paddingTop: 13,
      paddingBottom: 12,
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
  onEnter?: (value: unknown) => void
}

export interface OutlinedTextFieldProps extends MuiBaseTextFieldProps {
  onBlur?: OutlinedInputProps['onBlur'];
  onChange?: OutlinedInputProps['onChange'];
  onFocus?: OutlinedInputProps['onFocus'];
  variant?: 'outlined';
  InputProps?: Partial<OutlinedInputProps>;
  inputProps?: OutlinedInputProps['inputProps'];
  onEnter?: (value: unknown) => void
}

export interface StandardTextFieldProps extends MuiBaseTextFieldProps {
  onBlur?: StandardInputProps['onBlur'];
  onChange?: StandardInputProps['onChange'];
  onFocus?: StandardInputProps['onFocus'];
  variant?: 'standard';
  InputProps?: Partial<StandardInputProps>;
  inputProps?: StandardInputProps['inputProps'];
  onEnter?: (value: unknown) => void
}

export type KuiTextFieldProps = OutlinedTextFieldProps | FilledTextFieldProps | StandardTextFieldProps;

const KuiTextField = React.forwardRef(({
  variant='outlined',
  color='primary',
  InputProps={},
  defaultValue,
  value,
  onChange,
  disabled,
  InputLabelProps,
  onEnter,
  label,
  size,
  ...props
}: KuiTextFieldProps, ref: any) => {
  const classes = useStyles();

  const [state, setState] = React.useState<any>({value: defaultValue || value || ''});
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    if(value){
      setState({value});
    }
  }, [value]);

  const handleClickClear = () => {
    if(value && onChange){
      const event = {target: {value: ''}} as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
      onChange(event);
    }else{
      setState({value: ''});
    }
  }

  const handleKeypress = (e: any) => {
    if(e.keyCode === 13){
      onEnter && onEnter(state.value);
    }
  }

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleChange = (event: any) => {
    if(value && onChange){
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
    value: state.value,
    onChange: handleChange,
    disabled,
    size,
    InputLabelProps: {
      shrink,
      className: clsx(
        {[classes.startAdornmentLabel]: Boolean(InputProps && InputProps.startAdornment)},
        {[classes.startAdornmentLabelOutlinedSmall]: Boolean(InputProps && InputProps.startAdornment) && size==='small' && variant==='outlined'},
        {[classes.startAdornmentLabelFilledSmall]: Boolean(InputProps && InputProps.startAdornment) && size==='small' && variant==='filled'},
      ),
      ...InputLabelProps
    },
    onBlur: handleBlur,
    onFocus: handleFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onKeyUp: handleKeypress,
    ...props
  };


  if(variant === 'filled'){
    const {inputProps={}, ...otherInputProps} = InputProps;
    const {className, ...otherinputProps} = inputProps;
    return (
      <TextField
        InputProps={{
          disableUnderline: true,
          endAdornment,
          inputProps: {
            className: clsx(
              {[classes.filledinputNoLabel]: !Boolean(label)},
              {[classes.filledinputNoLabelSmall]: !Boolean(label) && textFieldProps.size==='small'},
              className
            ),
            ...otherinputProps
          },
          ...otherInputProps,
        } as Partial<OutlinedInputProps>}
        label={label}
        {...textFieldProps}
        ref={ref}
      />
    );
  }
  return (
    <TextField
      InputProps={{
        endAdornment,
        ...InputProps
      }}
      label={label}
      {...textFieldProps}
      ref={ref}
    />
  );
})

export default KuiTextField;

export type TextFieldProps=KuiTextFieldProps;