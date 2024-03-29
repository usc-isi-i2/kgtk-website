import React from 'react'

import { styled } from '@mui/material/styles'

import '@fontsource/ubuntu/700.css'

import { info } from '../content/home'
import bannerImage from '../images/banner.jpg'
import GraphAnimation from './GraphAnimation'


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


const SVG = styled('svg')(`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  pointer-events: none;
  user-select: none;
  z-index: 1;

  @keyframes stroke-animation {
    0% {
      fill-opacity: 0;
      stroke-width: 0;
      stroke-dasharray: 0% 100%;
    }
    25% {
      stroke-opacity: 1;
      stroke-width: 5px;
    }
    50% {
      fill-opacity: 0;
    }
    75% {
      stroke-width: 5px;
    }
    100% {
      fill: #fff;
      fill-opacity: 1;
      stroke-width: 0;
    }
  }
`)


const Title = styled('text')(`
  color: #fefefe;
  stroke: #fefefe;
  font: 10em "Ubuntu";
  letter-spacing: 0.15em;
  fill-opacity: 0;
  stroke-opacity: 0;
  stroke-width: 0;
  stroke-dasharray: 100% 0;
  animation-name: stroke-animation;
  animation-duration: 3s;
  animation-delay: 0.15s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`)


const Description = styled('text')(`
  color: #fefefe;
  stroke: #fefefe;
  font: 5em "Ubuntu";
  letter-spacing: 0.05em;
  fill-opacity: 0;
  stroke-opacity: 0;
  stroke-width: 0;
  stroke-dasharray: 100% 0;
  animation-name: stroke-animation;
  animation-duration: 3s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`)


const Banner = () => {

  const renderBannerImage = () => {
    return <BannerImage />
  }

  const renderAnimation = () => {
    return <GraphAnimation />
  }

  const renderTitle = () => {
    return (
      <React.Fragment>
        <SVG viewBox="0 0 1280 720">
          <Title text-anchor="middle" x="-5%" y="25%">
            {info.title}
          </Title>
          <Description text-anchor="middle" x="-5%" y="42%">
            {info.description}
          </Description>
        </SVG>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {renderBannerImage()}
      {renderAnimation()}
      {renderTitle()}
    </React.Fragment>
  )
}


export default Banner
