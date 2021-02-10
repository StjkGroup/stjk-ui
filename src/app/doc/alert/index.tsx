import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Alert from "./Alert";

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
        <h1>Welcome to keystore ui alert.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Alert from '@keystore/ui/Alert'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Alert/>
      </Box>
      <Box mt={8}>
      </Box>
    </div>
  )
};

export default TextFieldDoc;