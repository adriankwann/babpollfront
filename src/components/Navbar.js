import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from "../assets/babpoll.png"
import { NavLink } from 'react-router-dom';
import "../App.css"



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
          <NavLink to="/">
          <img className = "icn" src = {logo}></img>
          </NavLink>


         


          <Box sx={{ flexGrow: 1, marginRight: "25px", color: 'white', display: { xs: 'none', md: 'flex' }}}>
            <NavLink to = "/">
            <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                home
              </Button>

              </NavLink>

              <NavLink to = "/create">
            <Button
                key="create"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                New Poll
              </Button>

              </NavLink>
          </Box>
          <ConnectButton/>
        </Toolbar>
        
      </Container>
     
    </AppBar>
    </ThemeProvider>
    
  );
}
export default Navbar;