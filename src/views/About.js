import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Content from '../components/Content'
import { links } from '../content/about'


const About = () => {

  const renderByRole = role => {
    return (
      <Box>
        <Typography component="h4" variant="h4">
          {role}s
        </Typography>
        <br />
        {links.filter(link => link.role === role).map(link => (
          <Card key={link.name} sx={{
            display: 'inline-block',
            marginRight: '2em',
            width: 250,
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <CardMedia
                sx={{ height: 300 }}
                component="img"
                image={'http://placekitten.com/200/300'}
                title={link.name} />
              <CardContent>
                <Typography component="h5" variant="h5" textAlign="center">
                  <b>{link.name}</b>
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    )
  }

  return (
    <Content>
      <h1>The KGTK Team</h1>
      <hr />
      {renderByRole('Researcher')}
      {renderByRole('Collaborator')}
      {renderByRole('Engineer')}
    </Content>
  )
}


export default About
