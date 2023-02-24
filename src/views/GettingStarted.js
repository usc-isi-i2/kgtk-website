import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/getting-started'


const GettingStarted = () => {
  return (
    <Content>
      <h1>Getting Started</h1>
      <hr />
      {links.map(link => (
        <Link href={link.url} underline="hover" target="_blank" rel="noopener noreferrer">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default GettingStarted
