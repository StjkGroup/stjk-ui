import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@/../components/TextField";

const TextField1 = ({size}: any) => {
  
  const [value, setValue] = React.useState('123');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <TextField label="Outlined"
            value={value} onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <TextField label="输入"
            value={value} onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <TextField
            value={value} onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <TextField label="Filled" variant="filled" size={size}/>
        </Box>
        <Box ml={2}>
          <TextField variant="filled" size={size}/>
        </Box>
        <Box ml={2}>
          <TextField label="Standard" variant="standard" size={size} />
        </Box>
      </Box>
      {/* <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <TextField error />
        </Box>
        <Box ml={2}>
          <TextField label="Filled" variant="filled" error helperText={'error'}/>
        </Box>
        <Box ml={2}>
          <TextField label="standard" variant="standard" disabled value={value} onChange={handleChange}/>
        </Box>
      </Box> */}
    </Box>
  )
}

export default TextField1;