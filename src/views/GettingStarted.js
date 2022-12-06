import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/getting-started'


const GettingStarted = () => {
  return (
    <Content>
      <h1>Getting Started</h1>
      {links.map(link => (
        <Link href={link.url} underline="hover">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default GettingStarted