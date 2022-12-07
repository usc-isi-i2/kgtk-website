import React from 'react'
import { Link } from 'react-router-dom'

import Content from '../components/Content'
import { links } from '../content/home'


const Home = () => {
  return (
    <Content>
      <h1>Home</h1>
      {links.map(link => (
        <Link to={link.url}>
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default Home
