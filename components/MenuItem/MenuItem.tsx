import React from 'react';
import MenuItem, {MenuItemProps as MuiMenuItemProps} from '@material-ui/core/MenuItem';

const KuiMenuItem = React.forwardRef(({children, ...props}: MuiMenuItemProps, ref: any) => {
  return (
    <MenuItem
      ref={ref}
      {...props}
    >
      {children}
    </MenuItem>
  );
})

export default KuiMenuItem;

export type MenuItemProps=MuiMenuItemProps;
