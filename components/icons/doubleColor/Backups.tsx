import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

const Backups = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M170.666667 298.666667h512a42.666667 42.666667 0 0 1 42.666666 42.666666v512a42.666667 42.666667 0 0 1-42.666666 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z m42.666666 85.333333v426.666667h426.666667V384H213.333333z" fill="#212121" p-id="13393"></path><path d="M768 725.333333v-85.333333h42.666667V213.333333H384v42.666667H298.666667v213.333333-298.666666a42.666667 42.666667 0 0 1 42.666666-42.666667h512a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 0 1-42.666667 42.666666h-85.333333z" fill="#0062FF" />
    </SvgIcon>
  )
};

export default Backups;