import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Logout from "./Logout";

function Navbar() {
  const { user, userProfile } = useContext(AuthContext);

  return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="secondary"
        >
        <Toolbar>
              <Typography textAlign={"left"} component="div" sx={{ flexGrow: 1 }} variant='body1'>
                <Box
                sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}
                >
                codeconnect
                </Box>
              </Typography>
              {user && 
                <Typography component="div" variant='body1'>
                  <Box
                  >
                  {`Welcome, ${userProfile.firstName}`}
                  </Box>
                </Typography>
              }
              {user && <Logout/>}
        </Toolbar>
      </AppBar>
    </Box>
  )
  
}

export default Navbar;
