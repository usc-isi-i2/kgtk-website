import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'


const Search = ({text, label, updateText}) => {

  const handleOnChange = event => {
    const value = event.target.value
    updateText(value)
  }

  return (
    <TextField
      fullWidth
      name={text}
      label={label}
      value={text}
      disabled={false}
      autoFocus={false}
      autoComplete="off"
      onChange={handleOnChange}
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}


export default Search
