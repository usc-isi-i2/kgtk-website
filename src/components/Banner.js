import React, { useCallback } from 'react'

import { styled } from '@mui/material/styles'

import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import '@fontsource/ubuntu/700.css'

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


const SVG = styled('svg')(`
  position: absolute;
  width: 100%;
  height: 100%;
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


const Text = styled('text')(`
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

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  const renderBannerImage = () => {
    return  <BannerImage />
  }

  const renderParticles = () => {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 1,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#fefefe',
            },
            links: {
              color: '#fefefe',
              distance: 150,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "attract"
                },
                onClick: {
                  enable: true,
                  mode: "attract"
                },
                resize: true
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 100,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
            },
          },
          detectRetina: true,
        }}
      />
    )
  }

  const renderTitle = () => {
    return (
      <React.Fragment>
        <SVG viewBox="0 0 1280 720">
          <Text text-anchor="middle" x="60%" y="25%">
            {info.title}
          </Text>
          <Description text-anchor="middle" x="16%" y="42%">
            {info.description}
          </Description>
        </SVG>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {renderBannerImage()}
      {renderParticles()}
      {renderTitle()}
    </React.Fragment>
  )
}


export default Banner
