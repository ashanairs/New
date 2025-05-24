import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Product name" variant="outlined" />
      <TextField id="outlined-basic" label="Image" variant="outlined" />
      <TextField id="outlined-basic" label="Price" variant="outlined" />
      <TextField id="outlined-basic" label="Category" variant="outlined" />
      <Button variant="contained">ADD</Button>
      </Box>
      </div>
      
  );
}

export default Add
