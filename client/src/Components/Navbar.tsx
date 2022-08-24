import { AppBar, Avatar, Box, Divider, Drawer, List, Toolbar, Tooltip, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Navbar :React.FC = () => {
  const { user, userProfile, logOut } = useContext(AuthContext);
  const navigateTo = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () : void => {
    setDrawerOpen(!drawerOpen);
  }

  const handleNavigateToInDrawer = (text: string) => {
    navigateTo(text);
    handleDrawerToggle();
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="primary"
        >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="cursor white-cursor" display={"flex"} textAlign={"left"} component="div" sx={{ flexGrow: 1 }} variant='h6'>
            <Box
              className="fira-code" 
              sx={{ fontWeight: 'bold'}}
              >
              codeconnect~
            </Box>
          </Typography>
          {user ? 
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">
                <IconButton onClick={logOut} sx={{ p: 0 }}>
                  {userProfile &&
                    <Avatar alt={`Avatar of ${userProfile.firstName}`} src={userProfile.image} />
                  }
                  </IconButton>
                </Tooltip>
              </Box> : 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Login">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="login"
                  onClick={() => navigateTo("/login")}
                  sx={{ mr: 2, p: 0 }}>
                  <LoginIcon/>
                </IconButton>
              </Tooltip>
            </Box>
              }
          <Drawer
            anchor="left"
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              flexShrink: 0,
              display: { xs: 'block' },
            }}
          >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minHeight:"64px", width:"20rem", marginRight:"1rem"}}>          
              <IconButton onClick={handleDrawerToggle}>
                <ChevronLeftIcon/>
              </IconButton>
        </Box>

            <Divider />
            <List>
              <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigateToInDrawer("/")}>
                    <ListItemIcon>
                      <HomeIcon /> 
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigateToInDrawer("/profile")}>
                    <ListItemIcon>
                      <PersonIcon /> 
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
              </ListItem>
            </List>
            <Divider />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minHeight:"64px", width:"20rem", marginRight:"1rem"}}>          
              <Logout />
            </Box>
        </Drawer>
        
        </Toolbar>
      </AppBar>
    </Box>
  )
  
}

export default Navbar;