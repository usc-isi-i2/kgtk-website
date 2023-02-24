import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Content from '../components/Content'
import { links } from '../content/data.js'


const Data = () => {
  return (
    <Content>
      <h1>Data Catalog</h1>
      <hr />
      <Typography component="h5" variant="h5">
        Wikidata 11-2022
      </Typography>
      {links.map(link => (
        <Link href={link.url} underline="hover" target="_blank" rel="noopener noreferrer">
          <h4>{link.name}</h4>
        </Link>
      ))}
    </Content>
  )
}


export default Data
