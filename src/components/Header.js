import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'

import Logo from './Logo'
import routes from '../content/routes'


const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
    background-color: #fefefe;
    color: #333;

    svg {
      width: ${theme.spacing(4)};
    }
  `,
)


const Header = () => {

  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KGTK
      </Typography>
      <Divider />
      <List>
        {routes.map(route => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton
              onClick={() => navigate(route.path)}
              sx={{ textAlign: 'center' }}>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window.document.body : undefined

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <StyledAppBar component="nav">

        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            onClick={() => navigate('/')}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <Logo />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'none', lg: 'block' } }}>
            KGTK - Knowledge Graph ToolKit
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', lg: 'none' } }}>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map(route => (
              <Button
                onClick={() => navigate(route.path)}
                key={route.name}
                color="secondary"
                sx={{ color: '#333' }}>
                {route.name}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
              href="https://github.com/usc-isi-i2/kgtk"
              title="Knowledge Graph ToolKit"
              rel="noopener noreferrer nofollow"
              target="_blank">
              <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

        </Toolbar>

      </StyledAppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}


export default Header
