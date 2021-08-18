import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputForm = ({onTextChange, label}) => {
  return(
    <TextField
          id={`outlined-with-placeholder-${label}`}
          label={label}
          margin="normal"
          variant="outlined"
          onChange={onTextChange}
        />
  )
}

export default InputForm;