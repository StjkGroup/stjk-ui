import React from 'react';
import Box from "@material-ui/core/Box";
import SearchField from "@/../components/SearchField";

const SearchFieldDoc = ({size}: any) => {
  
  const [value, setValue] = React.useState('123');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <SearchField
            label="Default"
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
            label="Filled"
            variant="filled"
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
            label="Outlined"
            variant="outlined"
            size={size}
          />
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'}>
        <Box>
          <SearchField
            label="Outlined"
            error
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
            label="Filled"
            variant="filled"
            error
            helperText={'error'}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
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
          <SearchField
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
            error
            helperText={'error'}
            value={value}
            onChange={handleChange}
            size={size}
          />
        </Box>
        <Box ml={2}>
          <SearchField
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

export default SearchFieldDoc;