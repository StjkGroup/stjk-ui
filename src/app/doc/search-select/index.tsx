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

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Welcome to keystore ui button.</h1>
    </div>
  )
}