import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import '@fontsource/montserrat/700.css'


const StyledTextButton = styled(Button)(`
  position: absolute;
  left: 7vw;
  bottom: 20vh;
  color: #fefefe;
  font-family: "Montserrat";
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-size: 2rem;
  width: auto;
  height: 100px;
  z-index: 99;

  &:hover {
    background: "transparent";
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    left: 10vw;
    width: 80vw;
  }
`)


const TextButton = ({ props }) => {

  const navigate = useNavigate()

  const renderTextButton = () => {
    return (
      <StyledTextButton
        variant="text"
        size="large"
        target="_blank"
        disableRipple={true}
        disableFocusRipple={true}
        onClick={() => navigate(props.link)}>
        {props.text}
      </StyledTextButton>
    )
  }

  return (
    <React.Fragment>
      {renderTextButton()}
    </React.Fragment>
  )
}


export default TextButton
