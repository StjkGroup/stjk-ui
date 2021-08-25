import React from 'react';
import Box from '@material-ui/core/Box';
import AuditingEnUsIcon from '@/../components/icons/audit/AuditingEnUs';
import AuditingZhCnIcon from '@/../components/icons/audit/AuditingZhCn';
import CancelEnUsIcon from '@/../components/icons/audit/CancelEnUs';
import CancelZhCnIcon from '@/../components/icons/audit/CancelZhCn';
import CompleteEnUsIcon from '@/../components/icons/audit/CompleteEnUs';
import CompleteZhCnIcon from '@/../components/icons/audit/CompleteZhCn';
import ExpiredEnUsIcon from '@/../components/icons/audit/ExpiredEnUs';
import ExpiredZhCnIcon from '@/../components/icons/audit/ExpiredZhCn';
import RejectEnUsIcon from '@/../components/icons/audit/RejectEnUs';
import RejectZhCnIcon from '@/../components/icons/audit/RejectZhCn';
import RevokedEnUsIcon from '@/../components/icons/audit/RevokedEnUs';
import RevokedZhCnIcon from '@/../components/icons/audit/RevokedZhCn';
import FrozenEnUsIcon from '@/../components/icons/audit/FrozenEnUs';
import FrozenZhCnIcon from '@/../components/icons/audit/FrozenZhCn';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '120px',
  },
}));

const AuditApp = () => {

  const classes = useStyles();

  return (
    <>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <AuditingZhCnIcon className={classes.icon}/>
        <CancelZhCnIcon className={classes.icon}/>
        <CompleteZhCnIcon className={classes.icon}/>
        <ExpiredZhCnIcon className={classes.icon}/>
        <RejectZhCnIcon className={classes.icon}/>
        <RevokedZhCnIcon className={classes.icon}/>
        <FrozenZhCnIcon className={classes.icon}/>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <AuditingEnUsIcon className={classes.icon}/>
        <CancelEnUsIcon className={classes.icon}/>
        <CompleteEnUsIcon className={classes.icon}/>
        <ExpiredEnUsIcon className={classes.icon}/>
        <RejectEnUsIcon className={classes.icon}/>
        <RevokedEnUsIcon className={classes.icon}/>
        <FrozenEnUsIcon className={classes.icon}/>
      </Box>
    </>
    
  )
}

export default AuditApp;