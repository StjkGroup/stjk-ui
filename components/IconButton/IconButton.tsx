import React from 'react';
import IconButton, {IconButtonProps as MuiIconButton} from '@material-ui/core/IconButton';

const KuiIconButton = ({children, ...props}: MuiIconButton) => {
  return (
    <IconButton
      {...props}
    >
      {children}
    </IconButton>
  );
}

export default KuiIconButton;
export type IconButton = MuiIconButton;