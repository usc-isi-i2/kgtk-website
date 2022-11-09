import React from 'react'
import Box from '@mui/material/Box'

import Header from './Header'


const Content = ({children}) => {

  return (
    <Box sx={{ mt: 10 }}>
      <Header />
      {children}
    </Box>
  )
}


export default Content
