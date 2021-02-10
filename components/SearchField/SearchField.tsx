import React from 'react';
import
  TextField,
  {
    OutlinedTextFieldProps as KuiOutlinedTextFieldProps,
    FilledTextFieldProps as KuiFilledTextFieldProps,
  }
from '../TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '../IconButton';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
    },
    inputAdornment: {
      marginTop: 0,
    },
  }),
);

export interface OutlinedTextFieldProps extends KuiOutlinedTextFieldProps {
  onSearch?: (value: unknown) => void
}

export interface FilledTextFieldProps extends KuiFilledTextFieldProps {
  onSearch?: (value: unknown) => void
}

export type KuiSearchFieldProps = OutlinedTextFieldProps | FilledTextFieldProps;


const KuiSearchField = ({
  InputProps={},
  disabled,
  className,
  onSearch,
  ...props
}: KuiSearchFieldProps) => {
  const classes = useStyles();

  const handleSearch = () => {
    onSearch && onSearch(props.value);
  }

  const handleInputSearch = () => {
      handleSearch();
  }

  const startAdornment = (
    <InputAdornment position="start" className={classes.inputAdornment}>
      <IconButton
        onClick={handleSearch}
        disabled={disabled}
      >
        <SearchIcon/>
      </IconButton>
    </InputAdornment>
  );
  return (
    <TextField
      InputProps={{
        startAdornment,
        ...InputProps,
      }}
      disabled={disabled}
      className={clsx(classes.root, className)}
      onSearch={handleInputSearch}
      {...props}
    />
  );
}

export default KuiSearchField;

export type SearchFieldProps=KuiSearchFieldProps;