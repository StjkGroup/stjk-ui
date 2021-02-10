import React from 'react';
import Alert, {AlertProps as MuiAlertProps} from '@material-ui/lab/Alert';
// import {makeStyles} from "@material-ui/core/styles";
// import clsx from 'clsx';

// const useStyles = makeStyles((theme) => ({
//   primaryContainedDisabled: {
//     backgroundColor: `${theme.palette.primary.light} !important`
//   },
//   secondaryContainedDisabled: {
//     backgroundColor: `${theme.palette.secondary.light} !important`
//   },
//   primaryOutlinedDisabled: {
//     borderColor: `${theme.palette.primary.light} !important`,
//     color: `${theme.palette.primary.light} !important`
//   },
//   secondaryOutlinedDisabled: {
//     borderColor: `${theme.palette.secondary.light} !important`,
//     color: `${theme.palette.secondary.light} !important`
//   },
//   primaryTextDisabled: {
//     color: `${theme.palette.primary.light} !important`
//   },
//   secondaryTextDisabled: {
//     color: `${theme.palette.secondary.light} !important`
//   }
// }));

const KuiAlert = ({children, ...props}: MuiAlertProps) => {
  // const classes = useStyles();
  return (
    <Alert
      {...props}
    >
      {children}
    </Alert>
  );
}

export default KuiAlert;

export type AlertProps=MuiAlertProps;