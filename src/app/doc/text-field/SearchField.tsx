import React from 'react';
import Box from "@/../components/Box";
import SearchField from "@/../components/SearchField";

const SearchFieldDoc = () => {
  
  const [value, setValue] = React.useState('123');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <SearchField label="Default"
            value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <SearchField label="Filled" variant="filled" />
        </Box>
        <Box ml={2}>
          <SearchField label="Outlined" variant="outlined"/>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <SearchField label="Outlined" error />
        </Box>
        <Box ml={2}>
          <SearchField label="Filled" variant="filled" error helperText={'error'}/>
        </Box>
        <Box ml={2}>
          <SearchField label="outlined" disabled value={value} onChange={handleChange}/>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <SearchField value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <SearchField error helperText={'error'} value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
        <Box ml={2}>
          <SearchField disabled value={value} onChange={e => {setValue(e.target.value)}}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchFieldDoc;