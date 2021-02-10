import React from 'react';
import Box from "@/../components/Box";
import NumberField from "@/../components/NumberField";

const NumberFieldDoc = () => {
  
  const [value, setValue] = React.useState('123');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField label="Default"
            value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <NumberField label="Filled" variant="filled" />
        </Box>
        <Box ml={2}>
          <NumberField label="Outlined" variant="outlined" thousandSeparator={false}/>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField label="Outlined" error />
        </Box>
        <Box ml={2}>
          <NumberField label="Filled" variant="filled" error helperText={'error'}/>
        </Box>
        <Box ml={2}>
          <NumberField label="outlined" disabled value={value} onChange={handleChange}/>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <NumberField value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <NumberField error helperText={'error'} value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <NumberField disabled value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NumberFieldDoc;