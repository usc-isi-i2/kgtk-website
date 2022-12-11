import React from 'react'

import { styled } from '@mui/material/styles'

import bannerImage from '../images/banner.jpg'


const BannerImage = styled('div')(`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: url(${bannerImage});
  transition: opacity 500ms ease-in 0s;
  pointer-events: none;
  user-select: none;
  z-index: -1;
`)


const Banner = () => {

  const renderBannerImage = () => {
    return  <BannerImage />
  }

  return (
    <React.Fragment>
      {renderBannerImage()}
    </React.Fragment>
  )
}


export default Banner
