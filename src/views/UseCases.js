import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Linkify from 'react-linkify'

import Content from '../components/Content'
import { links } from '../content/use-cases'


const UseCases = () => {
  return (
    <Content>
      <h1>Use Cases</h1>
      {links.map(link => (
        <Card key={link.name}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              image={link.image}
              title={link.name} />
            <CardContent>
              <Typography component="h5" variant="h5">
                <b>{link.name}</b>
              </Typography>
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


export default UseCases
