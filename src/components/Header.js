import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import { styled } from '@mui/material/styles'

import Logo from './Logo'


const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
    background-color: #fefefe;
    color: #333;

    svg {
      width: ${theme.spacing(4)};
    }
  `,
)


const routes = [{
  'name': 'Tutorials',
  'path': '/tutorials',
}, {
  'name': 'Getting Started',
  'path': '/getting-started',
}, {
  'name': 'Data',
  'path': '/data',
}, {
  'name': 'Resources',
  'path': '/resources',
}, {
  'name': 'Use Cases',
  'path': '/use-cases',
}, {
  'name': 'About',
  'path': '/about',
}]


const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" >

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} >
              <Logo />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KGTK - Knowledge Graph ToolKit
          </Typography>

          <Divider />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map(route => (
              <Button
                href={route.path}
                key={route.name}
                color="secondary"
                sx={{ color: '#333' }}>
                {route.name}
              </Button>
            ))}
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
              href="https://github.com/usc-isi-i2/kgtk"
              title="Knowledge Graph ToolKit"
              rel="noopener noreferrer nofollow"
              target="_blank">
              <GitHubIcon fontSize="large" />
          </IconButton>
        </Toolbar>

      </StyledAppBar>
    </Box>
  )
}


export default Header
