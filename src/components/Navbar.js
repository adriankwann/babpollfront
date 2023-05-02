import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const pages = ['Home', 'Polls', 'Vote', 'Notifications', 'Analytics'];


const theme = createTheme({
    palette: {
      primary: {
        main: '#f6cc56'
      },
      secondary: {
        main: '#272727'
      },
      black : {
        main: "#000000"
      },
      darkPrimary: {
        main: '#e0a84e'
      }
    },
  });

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar color = "black" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 700,
              letterSpacing: '0rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            B@BPoll
          </Typography>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white'}} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', ml: '2rem'}, color: 'white'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography 
                  textAlign="center"
                  >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '0rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            B@BPoll
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, ml: 0, color: 'white' }} />


          <Box sx={{ flexGrow: 1, color: 'white', display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ConnectButton/>
        </Toolbar>
        
      </Container>
     
    </AppBar>
    </ThemeProvider>
    
  );
}
export default Navbar;