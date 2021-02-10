import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@/../components/Box';
import Select1 from './select1';
import Select2 from './select2';
import Select3 from './select3';
import Select4 from './select4';
import Select5 from './select5';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const SelectApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use keystore ui select.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Button from '@keystore/ui/Select'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Select1/>
        <Select2/>
        <Select3/>
        <Select4/>
        <Select5/>
      </Box>
    </div>
  )
}

export default SelectApp;