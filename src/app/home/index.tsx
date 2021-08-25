import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Welcome to keystore ui.</h1>
    </div>
  )
}

export default Home;
