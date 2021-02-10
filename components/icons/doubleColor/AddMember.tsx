import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

const AddMember = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M640 597.333333c111.36 0 331.264 54.656 340.992 163.2L981.333333 768v85.333333H298.666667v-85.333333c0-113.493333 227.413333-170.666667 341.333333-170.666667z m0 85.333334c-111.274667 0-238.634667 51.370667-254.805333 82.474666L384 768h512c-8.533333-30.293333-140.8-85.333333-256-85.333333z m0-512c94.293333 0 170.666667 76.373333 170.666667 170.666666s-76.373333 170.666667-170.666667 170.666667-170.666667-76.373333-170.666667-170.666667 76.373333-170.666667 170.666667-170.666666z m0 85.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333334 85.333333-38.4 85.333333-85.333334-38.4-85.333333-85.333333-85.333333z" fill="#212121" p-id="13957"></path><path d="M256 640v-128h128v-85.333333H256V298.666667H170.666667v128H42.666667v85.333333h128v128z" fill="#0062FF" />
    </SvgIcon>
  )
};

export default AddMember;