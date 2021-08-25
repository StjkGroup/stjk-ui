import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

type Type = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'body1'|'body2'|'caption'|'button'|'overline';

const text = 'The more difficult, the more you want to do. Reform is always not plain sailing.';
const types: Type[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'];

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use keystore ui typography.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Button from '@keystore/ui/Typography'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'90%'}>
          <Box display={'flex'} width={'100%'}>
            <Box width={'100px'}>
              <Typography>{'default'}</Typography>
            </Box>
            <Box width={'calc(100% - 100px)'}>
              <Typography>{text}</Typography>
            </Box>
          </Box>
          {
            types.map((type) => {
              return (
                <Box key={type} display={'flex'} width={'100%'} mt={2}>
                  <Box width={'100px'}>
                    <Typography variant={type}>{type}</Typography>
                  </Box>
                  <Box width={'calc(100% - 100px)'}>
                    <Typography variant={type}>{text}</Typography>
                  </Box>
                </Box>
              )
            })
          }
          <Box display={'flex'} width={'100%'} mt={2}>
            <Box>
              <Typography variant={'h3'} color={'primary'}>primary</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'error'}>error</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'inherit'}>inherit</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'initial'}>initial</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'secondary'}>secondary</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'textPrimary'}>textPrimary</Typography>
            </Box>
            <Box ml={2}>
              <Typography variant={'h3'} color={'textSecondary'}>textSecondary</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default App;
