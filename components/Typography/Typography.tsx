import React from 'react';
import Typography, {TypographyProps as MuiTypographyProps} from '@material-ui/core/Typography';

const KuiTypography = ({children, ...props}: MuiTypographyProps) => {
  return (
    <Typography
      {...props}
    >
      {children}
    </Typography>
  );
}

export default KuiTypography;

export type TypographyProps=MuiTypographyProps;