import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/tutorials'


const Tutorials = () => {
  return (
    <Content>
      <h1>Tutorials</h1>
      {links.map(link => (
        <Link href={link.link} underline="hover">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default Tutorials
