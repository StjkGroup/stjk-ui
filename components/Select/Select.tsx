import React from 'react';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/styles";
import { Theme, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = (theme: Theme) => makeStyles(() => ({
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

interface KuiSelectProps<T = unknown>{
  options: OptionType[],
  label?: React.ReactNode;
  defaultValue?: any;
  multiple?: boolean;
  onChange?: (event: SelectChangeEvent<any>) => void;
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
  renderValue?: (value: T) => React.ReactNode;
}

const LabelComponent = ({children, startIcon, endIcon}: any) => {
  const theme = useTheme();
  const classes = useStyles(theme)();
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
  value=defaultValue, onChange, helperText, multiple, renderValue,
  ...props
}: KuiSelectProps) => {
  const theme = useTheme();
  const classes = useStyles(theme)();
  const [state, setState] = React.useState({value: value});

  React.useEffect(() => {
    setState({value});
  }, [value]);

  const handleChange = (e: SelectChangeEvent<any>) => {
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
        multiple={multiple}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        renderValue={renderValue}
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