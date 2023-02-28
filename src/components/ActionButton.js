import React from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import '@fontsource/montserrat/700.css'


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
  left: 7vw;
  bottom: 10vh;
  color: #fefefe;
  background: #32CD32;
  font-family: "Montserrat";
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  width: auto;
  height: 100px;
  z-index: 99;

  &:hover {
    background: #2bae2b;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    left: 10vw;
    width: 80vw;
  }
`)


const ActionButton = ({ props }) => {

  const renderActionButton = () => {
    return (
      <StyledActionButton
        variant="contained"
        size="large"
        target="_blank"
        href={props.link}
        rel="noopener noreferrer">
        {props.text}
      </StyledActionButton>
    )
  }

  return (
    <React.Fragment>
      {renderActionButton()}
    </React.Fragment>
  )
}


export default ActionButton
