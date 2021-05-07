/**
 * Create by fay on 4/22/20 10:31 下午
 */
import ThemeProvider from '@/../components/provider/ThemeProvider';
import blueTheme from '@/../components/provider/ThemeProvider/theme/blue';
import React from "react";
import Root from './root';

const Provider = ({children}: any) => {

  return (
    <ThemeProvider theme={blueTheme}>
      <Root>
        {children}
      </Root>
    </ThemeProvider>
  )
};

export default Provider;