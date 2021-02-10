import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
    return (
      <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
        <path d="M703.232 67.008h127.488v413.248c0 158.016-142.656 286.016-318.72 286.016-176 0-318.72-128-318.72-286.016V67.008h127.488v413.248c0 39.872 18.176 78.144 51.136 107.776 36.8 32.96 86.528 51.072 140.096 51.072s103.36-18.112 140.032-51.136c33.024-29.632 51.2-67.968 51.2-107.776V67.008zM193.28 871.616h637.44v85.376H193.28v-85.376z"/>
      </SvgIcon>
    )
}