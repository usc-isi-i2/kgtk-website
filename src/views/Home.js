import React from 'react'

import Banner from '../components/Banner'
import ActionButton from '../components/ActionButton'
import Content from '../components/Content'

import { button } from '../content/home'


const Home = () => {
  return (
    <Content>
      <Banner />
      <ActionButton props={{...button}} />
    </Content>
  )
}


export default Home
