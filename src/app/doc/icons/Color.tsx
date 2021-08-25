import React from 'react';
import Box from '@material-ui/core/Box';
import TrialEnUsIcon from '@/../components/icons/color/TrialEnUs';
import TrialZhCnIcon from '@/../components/icons/color/TrialZhCn';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '56px',
    marginRight: '16px'
  },
}));

const ColorApp = () => {

  const classes = useStyles();

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <TrialEnUsIcon className={classes.icon}/>
      <TrialZhCnIcon className={classes.icon}/>
    </Box>
  )
}

export default ColorApp;