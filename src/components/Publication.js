import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { styled } from '@mui/material/styles'


const Wrapper = styled('div')(`
  margin-bottom: 2em;
`)


const BibtexButton = styled(Button)(`
  padding: 0 !important;
  margin: 5px 0;
  color: #111;
  background-color: transparent !important;
  cursor: pointer;
  user-select: none;
`)


const Bibtex = styled(Paper)(`
  padding: 1em;
  font-size: 1em;
  white-space: pre;
  overflow: scroll;
`)


const Publication = ({ data }) => {

  const [showBibtex, setShowBibtex] = useState(false)

  const handleOnClick = () => {
    setShowBibtex(!showBibtex)
  }

  return (
    <Wrapper>
      <Typography component="h5" variant="h5">
        {data.title}
      </Typography>
      <Typography component="p" variant="body1">
        {data.authors}
      </Typography>
      {!!data.booktitle ? (
        <Typography component="p" variant="body1">
          {`${data.booktitle} ${!!data.year ? data.year : ''}`}
        </Typography>
      ) : (
        <Typography component="p" variant="body1">
          {`${data.type} published in ${!!data.journal ? `${data.journal}; ` : ''} ${!!data.year ? data.year : ''}`}
        </Typography>
      )}
      <BibtexButton
        variant="text"
        disableRipple={true}
        disableFocusRipple={true}
        endIcon={!!showBibtex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => handleOnClick()}>
        BibTeX
      </BibtexButton>
      {!!data.url ? (
        <IconButton component={Link} href={data.url} target="_blank" rel="noopener noreferrer">
          <PictureAsPdfIcon />
        </IconButton>
      ) : null}
      {!!showBibtex ? (
        <Bibtex variant="outlined">
          <Box fontFamily="Monospace">
            {data.bibtex}
          </Box>
        </Bibtex>
      ) : null}
    </Wrapper>
  )
}


export default Publication
