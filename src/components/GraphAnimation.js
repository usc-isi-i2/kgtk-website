import React, { useCallback } from 'react'

import Particles from 'react-particles'
import { loadFull } from 'tsparticles'


const GraphAnimation = () => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  const renderParticles = () => {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
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
              detectsOn: 'canvas',
              events: {
                onHover: {
                  enable: true,
                  mode: 'attract'
                },
                onClick: {
                  enable: true,
                  mode: 'attract'
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

  return (
    <React.Fragment>
      {renderParticles()}
    </React.Fragment>
  )
}


export default GraphAnimation
