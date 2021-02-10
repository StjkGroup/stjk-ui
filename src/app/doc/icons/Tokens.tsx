import React from 'react';
import Box from '@/../components/Box';
import BitcoinIcon from '@/../components/icons/tokens/Bitcoin';
import BitcoinCashIcon from '@/../components/icons/tokens/BitcoinCash';
import EthereumIcon from '@/../components/icons/tokens/Ethereum';
import BinanceCoinIcon from '@/../components/icons/tokens/BinanceCoin';
import HuobiTokenIcon from '@/../components/icons/tokens/HuobiToken';
import TetherTokenIcon from '@/../components/icons/tokens/Tether';
import TetherERC20Icon from '@/../components/icons/tokens/TetherERC20';
import TetherOMNIIcon from '@/../components/icons/tokens/TetherOMNI';
import LitecoinIcon from '@/../components/icons/tokens/Litecoin';
import FilecoinIcon from '@/../components/icons/tokens/Filecoin';
import USDIcon from '@/../components/icons/tokens/USD';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '48px',
  },
}));

const TokensApp = () => {

  const classes = useStyles();

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <BitcoinIcon className={classes.icon}/>
      <BitcoinCashIcon className={classes.icon}/>
      <EthereumIcon className={classes.icon}/>
      <BinanceCoinIcon className={classes.icon}/>
      <HuobiTokenIcon className={classes.icon}/>
      <TetherTokenIcon className={classes.icon}/>
      <TetherERC20Icon className={classes.icon}/>
      <TetherOMNIIcon className={classes.icon}/>
      <LitecoinIcon className={classes.icon}/>
      <FilecoinIcon className={classes.icon}/>
      <USDIcon className={classes.icon}/>
    </Box>
  )
}

export default TokensApp;