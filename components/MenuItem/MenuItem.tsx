import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const KuiMenuItem = React.forwardRef(({children, ...props}: any, ref: any) => {
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

export * from '@material-ui/core/MenuItem';
