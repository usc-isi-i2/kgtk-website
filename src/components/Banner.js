import React from 'react'

import { styled } from '@mui/material/styles'

import '@fontsource/montserrat/700.css'

import { info } from '../content/home'
import bannerImage from '../images/banner.jpg'


const BannerImage = styled('div')(`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: url(${bannerImage}) 50% 50% / cover no-repeat scroll rgb(35, 35, 35);
  transition: opacity 500ms ease-in 0s;
  pointer-events: none;
  user-select: none;
  z-index: -1;
`)


const Title = styled('h1')(`
  display: inline-block;
  width: 100%;
  padding: 0 5vw;
  letter-spacing: 0.15em;
  margin: 2.5rem 0 0.5rem 0;
  text-align: right;
  font-family: "Montserrat";
  font-size: 7rem;
  color: #fefefe;
  pointer-events: none;
  user-select: none;
  z-index: 1;
`)


const Description = styled('h4')(`
  display: inline-block;
  width: 100%;
  padding: 0 5vw;
  margin: 1rem 0;
  text-align: right;
  font-family: "Montserrat";
  font-size: 7rem;
  color: #fefefe;
  pointer-events: none;
  user-select: none;
  z-index: 1;
`)


const Banner = () => {

  const renderBannerImage = () => {
    return  <BannerImage />
  }

  const renderProjectInfo = () => {
    return (
      <React.Fragment>
        <Title>{info.title}</Title>
        <Description>{info.description}</Description>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {renderBannerImage()}
      {renderProjectInfo()}
    </React.Fragment>
  )
}


export default Banner
