import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { styled } from '@mui/material/styles'


const Wrapper = styled('div')(`
  margin: 1em,
  & h5: {
    color: #111,
  },
  & p: {
    color: #111,
  },
`)


const BibtexButton = styled(Typography)(`
  display: inline,
  cursor: pointer,
  user-select: none,
  & .MuiSvgIcon-root: {
    vertical-align: middle,
  }
`)


const Bibtex = styled(Paper)(`
  padding: 1em,
  font-size: 1em,
  white-space: pre,
  overflow: scroll,
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
        component="p"
        variant="body1"
        onClick={() => handleOnClick()}>
        BibTeX
        {!!showBibtex ? (
          <ExpandLessIcon />
        ) : (
          <ExpandMoreIcon />
        )}
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
