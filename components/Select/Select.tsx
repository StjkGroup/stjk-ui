import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '../MenuItem';
import InputLabel from '../InputLabel';
import FormHelperText from '../FormHelperText';
import FormControl from '../FormControl';
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';
import Box from '../Box';
import Typography from '../Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  startIconTypography: {
    marginLeft: theme.spacing(1),
  },
  endIconTypography: {
    marginRight: theme.spacing(1),
  },
}));

type ValueType = string | number | string[] | undefined;

export interface OptionType {
  label: React.ReactNode,
  value: ValueType,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
}

interface KuiSelectProps{
  options: OptionType[],
  label?: React.ReactNode;
  defaultValue?: any;
  multiple?: boolean;
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  value?: any;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  focused?: boolean;
  hiddenLabel?: boolean;
  required?: boolean;
  size?: 'small' | 'medium';
  variant?: 'standard' | 'outlined' | 'filled';
  className?: string
  helperText?: React.ReactNode;
  labelId?: string;
  autoWidth?: boolean;
}

const LabelComponent = ({children, startIcon, endIcon}: any) => {
  const classes = useStyles();
  return (
    <Box display={'flex'} alignItems={'center'}>
      {startIcon}
      <Typography
        className={
          clsx(
            {[classes.startIconTypography]: startIcon},
            {[classes.endIconTypography]: endIcon}
          )
        }>
          {children}
      </Typography>
      {endIcon}
    </Box>
  )
};

const KuiSelect = ({
  children, className, variant="outlined", options, label, labelId, defaultValue='',
  value=defaultValue, onChange, helperText,
  ...props
}: KuiSelectProps) => {
  const classes = useStyles();
  const [state, setState] = React.useState({value: value});

  React.useEffect(() => {
    setState({value});
  }, [value]);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if(onChange){
      onChange(e);
    }else{
      setState({value: e.target.value});
    }
  }

  return (
    <FormControl className={clsx(classes.formControl, className)} variant={variant} {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        value={state.value}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
      >
        {
          options.map((option: OptionType, index: number) => {
            return (
              <MenuItem value={option.value} key={index}>
                <LabelComponent startIcon={option.startIcon} endIcon={option.endIcon}>{option.label}</LabelComponent>
              </MenuItem>
            );
          })
        }
      </Select>
      {
        helperText &&
        <FormHelperText>{helperText}</FormHelperText>
      }
    </FormControl>
  );
}

export default KuiSelect;

export type SelectProps=KuiSelectProps;