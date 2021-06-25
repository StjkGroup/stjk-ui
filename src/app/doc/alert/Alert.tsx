import React from 'react';
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/core/Alert";

const AlertDoc = () => {
  
  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Box>
      </Box>
    </Box>
  )
}

export default AlertDoc;