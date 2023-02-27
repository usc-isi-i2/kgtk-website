import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'


const Search = ({text, label, updateText}) => {

  const handleOnChange = event => {
    const value = event.target.value
    updateText(value)
  }

  return (
    <TextField
      name={text}
      label={label}
      value={text}
      disabled={false}
      autoFocus={false}
      autoComplete="off"
      onChange={handleOnChange}
      variant="standard"
      fullWidth
    />
  )
}


export default Search
