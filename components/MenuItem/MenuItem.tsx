import React from 'react';
import MenuItem, {MenuItemProps as MuiMenuItemProps} from '@material-ui/core/MenuItem';

const KuiMenuItem = React.forwardRef(({children, button=true, ...props}: MuiMenuItemProps, ref: any) => {
  if(button){
    return (
      <MenuItem
        ref={ref}
        button
        {...props}
      >
        {children}
      </MenuItem>
    );
  }else{
    return (
      <MenuItem
        ref={ref}
        button={false}
        {...props}
      >
        {children}
      </MenuItem>
    );
  }
})

export default KuiMenuItem;

export type MenuItemProps=MuiMenuItemProps;
