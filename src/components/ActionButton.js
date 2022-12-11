import React from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import '@fontsource/montserrat/700.css'


const StyledActionButton = styled(Button)(`
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
      <StyledActionButton variant="contained" size="large">
        CALL TO ACTION
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
