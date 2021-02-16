import React from 'react';
import Alert, {AlertProps as MuiAlertProps} from '@material-ui/core/Alert';

const KuiAlert = ({children, ...props}: MuiAlertProps) => {
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