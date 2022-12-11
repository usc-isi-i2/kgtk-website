import React from 'react'

import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import '@fontsource/montserrat/700.css'

import { button } from '../content/home'


const StyledActionButton = styled(Button)(`
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    47.5% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    52.5% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  animation-name: scale;
  animation-duration: 15s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;

  position: absolute;
  right: 5vw;
  bottom: 10vh;
  color: #fefefe;
  background: #32CD32;
  font-family: "Montserrat";
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  width: 500px;
  height: 100px;
  z-index: 99;

  &:hover {
    background: #2bae2b;
  }
`)


const ActionButton = () => {

  const renderActionButton = () => {
    return (
      <Link to={button.url}>
        <StyledActionButton variant="contained" size="large">
          {button.text}
        </StyledActionButton>
      </Link>
    )
  }

  return (
    <React.Fragment>
      {renderActionButton()}
    </React.Fragment>
  )
}


export default ActionButton
