import { Box, Modal, Button, Typography, Grid, TextField, Avatar} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from '../Context/AuthContext'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const ModalUpdateProfile:React.FC<ModalProps> = ({ open, close }) => {
  const { userProfile, updatedUserProfile, setUpdatedUserProfile, updateProfile } = useContext(AuthContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUserProfile({ ...updatedUserProfile, [e.target.name]: e.target.value });
    console.log(updatedUserProfile)
  };

  const handleSubmitProfileChange = (event: React.FormEvent) => {
    event.preventDefault();
    updateProfile();
    close();
  }


  return (
    <div>
      <Modal 
        open={open} 
        onClose={close}>

            {userProfile ? 
            <Box className="modal-style modal-style-paper" sx={{ p: 2 }}>
                <Box
                    sx={{
                    dispay: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    <Box component="form" >
                        {/* <Box sx={{py:2}}>
                            <TextHeaderLine text={userProfile.username} />
                        </Box> */}

                        <Typography variant={"h4"} textAlign={"center"} component={"div"} color="primary" align="left" sx={{ pt: 2, pb:1 }}>
                            <Box className="fira-code">
                            {`${userProfile.username} user profile`}
                            </Box>
                        </Typography>

                        <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
                            <Grid item xs={4} md={3} >
                            <Avatar
                                alt={`${userProfile.firstName} ${userProfile.lastName}`}
                                src={userProfile.image}
                                sx={{ width: 50, height: 50 }}
                            />
                            </Grid>

                            <Grid item xs>
                                {/* TODO place buttons to change avatar image */}
                            <Typography variant="body2" color="text.secondary" textAlign={"left"}>Change avatar image (PLACEHOLDER)</Typography>
                            </Grid>
                        </Grid>

                        <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
                            <Grid item xs={4} md={3} >
                            <Typography variant="body2" color="text.secondary" textAlign={"left"}>First name:</Typography>
                            </Grid>

                            <Grid item xs>
                                <TextField
                                    // required
                                    size='small'
                                    // id="email-input"
                                    // label={props.label}
                                    // type={props.type}
                                    fullWidth
                                    inputProps={{ maxLength: 120 }}
                                    name="firstName"
                                    placeholder={userProfile.firstName}
                                    // defaultValue={props.default}
        //TODO white the onchange handler here
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
                            <Grid item xs={4} md={3} >
                            <Typography variant="body2" color="text.secondary" textAlign={"left"}>Last name:</Typography>
                            </Grid>

                            <Grid item xs>
                                <TextField
                                    // required
                                    size='small'
                                    // id="email-input"
                                    // label={props.label}
                                    // type={props.type}
                                    fullWidth
                                    inputProps={{ maxLength: 120 }}
                                    name="lastName"
                                    placeholder={userProfile.lastName}
                                    // defaultValue={props.default}
        //TODO white the onchange handler here
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
                            <Grid item xs={4} md={3} >
                            <Typography variant="body2" color="text.secondary" textAlign={"left"}>Username:</Typography>
                            </Grid>

                            <Grid item xs>
                                <TextField
                                    // required
                                    size='small'
                                    // id="email-input"
                                    // label={props.label}
                                    // type={props.type}
                                    fullWidth
                                    inputProps={{ maxLength: 120 }}
                                    name="username"
                                    placeholder={userProfile.username}
                                    // defaultValue={props.default}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
                            <Grid item xs={4} md={3} >
                            <Typography variant="body2" color="text.secondary" textAlign={"left"}>Email:</Typography>
                            </Grid>

                            <Grid item xs>
                                <TextField
                                    // required
                                    size='small'
                                    // id="email-input"
                                    // label={props.label}
                                    // type={props.type}
                                    fullWidth
                                    inputProps={{ maxLength: 120 }}
                                    name="email"
                                    placeholder={userProfile.email}
                                    // defaultValue={props.default}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", pt: 4, pb: 1, gap:2 }}>
                            <Button
                                startIcon={<CancelIcon />}
                                variant="contained"
                                color="secondary"
                                onClick={close}
                            >
                                Discard
                            </Button>
                            <Button
                                endIcon={<SaveIcon />}
                                variant="contained"
                                color="primary"
                                onClick={handleSubmitProfileChange}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>

                </Box>

            </Box> :
            <p>Loading</p>}

      </Modal>
    </div>
  );
}

export default ModalUpdateProfile;