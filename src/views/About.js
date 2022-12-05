import React from 'react'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/about'


const About = () => {
  return (
    <Content>
      <h1>Something about the project and about us</h1>
      {links.map(link => (
        <Link href={link.link} underline="hover">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default About
