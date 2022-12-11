import React from 'react'

import { styled } from '@mui/material/styles'

import bannerImage from '../images/banner.jpg'


const BannerImage = styled('img')(`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms ease-in 0s;
  pointer-events: none;
  user-select: none;
  z-index: -1;
`)


const Banner = () => {

  return (
    <React.Fragment>
      <BannerImage src={bannerImage} />
    </React.Fragment>
  )
}


export default Banner
