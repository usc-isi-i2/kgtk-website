import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/data.js'


const Data = () => {
  return (
    <Content>
      <h1>Get your data here:</h1>
      {links.map(link => (
        <Link href={link.url} underline="hover">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default Data
