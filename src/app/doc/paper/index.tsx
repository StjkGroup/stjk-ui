import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@/../components/Box';
import Paper from '@/../components/Paper';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60px'
  }
}));

const elevations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use keystore ui button.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Button from '@keystore/ui/Button'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'80%'}>
          {
            elevations.map((elevation) => {
              return (
                <Box key={elevation} width={'100%'} mt={4} mb={4}>
                  <Paper elevation={elevation} className={classes.paper}>elevation={elevation}{elevation===1&&"(default)"}</Paper>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </div>
  )
}

export default App;
