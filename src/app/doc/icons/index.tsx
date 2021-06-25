import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@/../components/icons/Favorite';
import DelelteIcon from '@/../components/icons/Delelte';
import Tokens from './Tokens';
import Audit from './Audit';
import DoubleColor from './DoubleColor';
import Color from './Color';
import Logo from './Logo';
import {NAME} from '@/env';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  icon: {
    marginRight: '16px'
  }
}));

const IconsApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use {NAME} icons.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/XXX'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <FavoriteIcon className={classes.icon}/>
        <DelelteIcon className={classes.icon}/>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/tokens/XXX'</code>
      </Box>
      <Tokens/>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/color/XXX'</code>
      </Box>
      <Color/>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/doubleColor/XXX'</code>
      </Box>
      <DoubleColor/>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/audit/XXX'</code>
      </Box>
      <Audit/>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import XXX from '@keystore/ui/logo/XXX'</code>
      </Box>
      <Logo/>
    </div>
  )
}

export default IconsApp;