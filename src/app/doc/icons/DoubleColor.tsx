import React from 'react';
import Box from '@material-ui/core/Box';
import AddMemberIcon from '@/../components/icons/doubleColor/AddMember';
import AddWalletIcon from '@/../components/icons/doubleColor/AddWallet';
import BackupsIcon from '@/../components/icons/doubleColor/Backups';
import CollectionIcon from '@/../components/icons/doubleColor/Collection';
import InvalidIcon from '@/../components/icons/doubleColor/Invalid';
import KeyHolderIcon from '@/../components/icons/doubleColor/KeyHolder';
import PayIcon from '@/../components/icons/doubleColor/Pay';
import PayeeIcon from '@/../components/icons/doubleColor/Payee';
import PowerIcon from '@/../components/icons/doubleColor/Power';
import TransferorIcon from '@/../components/icons/doubleColor/Transferor';
import ArchivedIcon from '@/../components/icons/doubleColor/Archived';
import EnableWalletIcon from '@/../components/icons/doubleColor/EnableWallet';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(() => ({
  icon: {
    // fontSize: '120px',
    marginRight: '16px'
  },
}));

const DoubleColorApp = () => {

  const classes = useStyles();

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <AddMemberIcon className={classes.icon}/>
      <AddWalletIcon className={classes.icon}/>
      <BackupsIcon className={classes.icon}/>
      <CollectionIcon className={classes.icon}/>
      <InvalidIcon className={classes.icon}/>
      <KeyHolderIcon className={classes.icon}/>
      <PayIcon className={classes.icon}/>
      <PayeeIcon className={classes.icon}/>
      <PowerIcon className={classes.icon}/>
      <TransferorIcon className={classes.icon}/>
      <ArchivedIcon className={classes.icon}/>
      <EnableWalletIcon className={classes.icon}/>
    </Box>
  )
}

export default DoubleColorApp;