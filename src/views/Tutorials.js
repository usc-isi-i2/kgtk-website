import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Linkify from 'react-linkify'

import Content from '../components/Content'
import { links } from '../content/tutorials'


const Tutorials = () => {
  return (
    <Content>
      <h1>Tutorials</h1>
      <hr />
      {links.map(link => (
        <Card key={link.name}>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            },
          }}>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              image={link.image}
              title={link.name} />
            <CardContent>
              <Link href={link.url} underline="hover" target="_blank" rel="noopener noreferrer">
                <Typography component="h5" variant="h5">
                  <b>{link.name}</b>
                </Typography>
              </Link>
              <Typography component="p" variant="body1">
                <Linkify>
                  {link.description}
                </Linkify>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Content>
  )
}


export default Tutorials
