import React from 'react'

import Header from './Header'


const Content = ({children}) => {

  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}


export default Content
