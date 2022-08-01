import { AppBar, Avatar, Box, Toolbar, Tooltip, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Logout from "./Logout";

function Navbar() {
  const { user, userProfile, logOut } = useContext(AuthContext);

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
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography display={"flex"} textAlign={"left"} component="div" sx={{ flexGrow: 1 }} variant='h6'>
            <Box
              className="branding-text" 
              sx={{ fontWeight: 'bold'}}
              >
              codeconnect
            </Box>


              </Typography>
              {user && 
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">
                  <IconButton onClick={logOut} sx={{ p: 0 }}>
                    <Avatar alt={`Avatar of ${userProfile.firstName}`} src={userProfile.image}/>
                  </IconButton>
                </Tooltip>
                </Box>
              }
        </Toolbar>
      </AppBar>
    </Box>
  )
  
}

export default Navbar;
