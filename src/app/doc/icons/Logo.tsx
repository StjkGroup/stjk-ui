import React from 'react';
import Box from '@/../components/Box';
import KeyPayIcon from '@/../components/icons/logo/KeyPay';
import KeypoolIcon from '@/../components/icons/logo/KeyPool';
import KeystoreIcon from '@/../components/icons/logo/Keystore';
import KeystoreClientIcon from '@/../components/icons/logo/KeystoreClient';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '120px',
  },
}));

const AuditApp = () => {

  const classes = useStyles();

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <KeyPayIcon className={classes.icon}/>
      <KeypoolIcon className={classes.icon}/>
      <KeystoreIcon className={classes.icon}/>
      <KeystoreClientIcon className={classes.icon} color={'primary'}/>
    </Box>
  )
}

export default AuditApp;