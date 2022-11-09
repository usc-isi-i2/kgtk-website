import React from 'react'
import Toolbar from '@mui/material/Toolbar'

import Header from './Header'


const Content = ({children}) => {

  return (
    <React.Fragment>
      <Header />
      <Toolbar />
      {children}
    </React.Fragment>
  )
}


export default Content
