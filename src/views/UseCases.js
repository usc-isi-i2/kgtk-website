import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/use-cases'


const UseCases = () => {
  return (
    <Content>
      <h1>Use Cases</h1>
      {links.map(link => (
        <Link href={link.link} underline="hover">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default UseCases
