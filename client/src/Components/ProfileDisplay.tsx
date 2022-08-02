import { Avatar, Badge, Box, Typography } from "@mui/material";
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { PhotoCamera } from "@mui/icons-material";

function ProfileDisplay() {
    const { userProfile } = useContext(AuthContext);

  return (
      <>
          {userProfile &&
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>          
                <Avatar
                    alt={`${userProfile.firstName} ${userProfile.lastName}`}
                    src={userProfile.image}
                    sx={{ width: 50, height: 50 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>          
                    <Typography variant="h5"
                    >
                        {`${userProfile.firstName} ${userProfile.lastName}`}
                    </Typography>
                    {userProfile.username &&
                        <Typography variant="body2">
                            {userProfile.username}
                        </Typography>}
                </Box>
            </Box>}
      </>
  )
}

export default ProfileDisplay