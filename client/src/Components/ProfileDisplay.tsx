import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { PhotoCamera } from "@mui/icons-material";

const ProfileDisplay:React.FC = () => {
    const { userProfile, deleteProfile } = useContext(AuthContext); 


  return (
      <>
          {userProfile &&
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:1, flexDirection: "column", pt:4, pb:2 }}>          
                <Avatar
                    alt={`${userProfile.firstName} ${userProfile.lastName}`}
                    src={userProfile.image}
                    sx={{ width: 50, height: 50 }}
                />
                <Typography variant="h5"
                >
                    {`${userProfile.firstName} ${userProfile.lastName}`}
                </Typography>
                {userProfile.username &&
                    <Typography variant="body2">
                        {userProfile.username}
                    </Typography>}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:1, pt:4, pb:2 }}>          
                    <Button 
                    startIcon={<EditIcon/>}
                    onClick={() => deleteProfile()}>
                        Edit profile
                    </Button>
                    <Button 
//  TODO: make notification before deleting account
                    startIcon={<DeleteIcon/>}
                    onClick={() => deleteProfile()}>
                        Delete profile
                    </Button>
                </Box>

            </Box>}
      </>
  )
}

export default ProfileDisplay