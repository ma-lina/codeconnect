import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalAlertDeleteAccount from "./ModalAlertDeleteAccount";
import ModalUpdateProfile from "./ModalUpdateProfile";

const ProfileDisplay:React.FC = () => {
    const { userProfile, deleteProfile } = useContext(AuthContext); 
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

    const toggle = (value:boolean, setValue:React.Dispatch<React.SetStateAction<boolean>>) => {
      if (!value) {
        setValue(true);
      } else {
        setValue(false);
      };
    }; 

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
                    onClick={() => toggle (openEditModal, setOpenEditModal)}>
                        Edit profile
                    </Button>
                    <ModalUpdateProfile
                        open={openEditModal}
                        close={() => toggle (openEditModal, setOpenEditModal)}
                        />
                    <Button 
                    startIcon={<DeleteIcon/>}
                    onClick={() => toggle (openDeleteModal, setOpenDeleteModal)}>
                        Delete profile
                    </Button>
                </Box>
                <ModalAlertDeleteAccount
                open={openDeleteModal}
                close={() => toggle (openDeleteModal, setOpenDeleteModal)}
                />
            </Box>}
      </>
  )
}

export default ProfileDisplay