import React from 'react'

import Content from '../components/Content'
import Banner from '../components/Banner'
import TextButton from '../components/TextButton'
import ActionButton from '../components/ActionButton'

import { textButton, actionButton } from '../content/home'


const Home = () => {
  return (
    <Content>
      <Banner />
      <TextButton props={{...textButton}} />
      <ActionButton props={{...actionButton}} />
    </Content>
  )
}


export default Home
