import React from 'react';
import Paper, {PaperProps as MuiPaperProps} from '@material-ui/core/Paper';

const KuiPaper = ({children, ...props}: MuiPaperProps) => {
  return (
    <Paper
      {...props}
    >
      {children}
    </Paper>
  );
}

export default KuiPaper;

export type PaperProps=MuiPaperProps;