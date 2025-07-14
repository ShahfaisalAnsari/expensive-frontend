import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({ label, type = 'text', value, onChange, required = false,name }) => {
  return (
    <TextField
    name={name}
      required={required}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
