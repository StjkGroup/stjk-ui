import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Pagination from '@/../components/Pagination';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const ButtonApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use stjk ui button.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Pagination from '@stjk/ui/Pagination'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Pagination count={10} color={'primary'} />
          <Pagination count={10} color={'primary'} showFirstButton showLastButton/>
          <Pagination count={10} color={'primary'} hidePrevButton hideNextButton/>
        </Box>
      </Box>
    </div>
  )
}

export default ButtonApp;