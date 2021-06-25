import React from 'react';
import Box from "@material-ui/core/Box";
import NumberField from "@/../components/NumberField";

const NumberFieldDoc = ({size}: any) => {
  
  const [value, setValue] = React.useState('123');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField
            label="Default"
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            label="Filled"
            variant="filled"
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            label="Outlined"
            variant="outlined"
            thousandSeparator={false}
            size={size}
          />
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField
            label="Outlined"
            error
            max={500}
            min={0}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            label="Filled"
            variant="filled"
            error
            helperText={'error'}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            label="outlined"
            disabled
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            error
            helperText={'error'}
            value={value}
            variant="filled"
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <NumberField
            disabled
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NumberFieldDoc;