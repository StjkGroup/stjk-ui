import React from 'react';
import TextField from '../TextField';
import Autocomplete, {AutocompleteRenderInputParams, AutocompleteClassKey} from '../Autocomplete';
import KeyboardArrowDownIcon from '../icons/KeyboardArrowDown';
import { StandardProps } from '@material-ui/core';
// import clsx from 'clsx';
// import {
//   createStyles,
//   makeStyles,
// } from '@material-ui/core/styles';

// const useStyles = makeStyles(() =>
//   createStyles({
//   }),
// );

interface KuiAutocompleteFieldProps<T> extends StandardProps<
React.HTMLAttributes<HTMLDivElement>,
AutocompleteClassKey,
'defaultValue' | 'onChange' | 'children'
>{
  multiple?: boolean
  options: T[],
  getOptionLabel?: (option: T) => string;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  defaultValue?: T | T[];
}

const KuiAutocompleteField:<T>(props: KuiAutocompleteFieldProps<T>) => JSX.Element = ({
  options,
  getOptionLabel,
  renderInput,
  ...props
}) => {
  // const classes = useStyles();

  return (
    <Autocomplete
      popupIcon={<KeyboardArrowDownIcon/>}
      options={options}
      getOptionLabel={getOptionLabel}
      renderInput={
        renderInput||
        (
          (params) => (
          <TextField
            {...params}
          />)
        )
      }
      {...props}
    />
  );
}

export default KuiAutocompleteField;

export type AutocompleteFieldProps<T> = KuiAutocompleteFieldProps<T>;