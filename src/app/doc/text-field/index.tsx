import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "./TextField";
import NumberField from "./NumberField";
import SearchField from "./SearchField";
import AutocompleteField from "./AutocompleteField";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const TextFieldDoc = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to keystore ui TextField.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import TextField from '@keystore/ui/TextField'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <TextField/>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import NumberField from '@keystore/ui/NumberField'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <NumberField/>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import SearchField from '@keystore/ui/SearchField'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <SearchField/>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import AutocompleteField from '@keystore/ui/AutocompleteField'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <AutocompleteField/>
      </Box>
      <Box mt={8}>
      </Box>
    </div>
  )
};

export default TextFieldDoc;