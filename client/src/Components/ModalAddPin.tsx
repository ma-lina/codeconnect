import {
  Box,
  Modal,
  Button,
  Typography,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const ModalAddPin: React.FC<ModalProps> = ({ open, close }) => {
  //   const { userProfile, updatedUserProfile, setUpdatedUserProfile, updateProfile } = useContext(AuthContext);

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setUpdatedUserProfile({ ...updatedUserProfile, [e.target.name]: e.target.value });
  //     console.log(updatedUserProfile)
  //   };

  //   const handleSubmitProfileChange = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     updateProfile();
  //     close();
  //   }

  return (
    <div>
      <Modal open={open} onClose={close}>
        <Box className="modal-style modal-style-paper" sx={{ p: 2 }}>
          <Box
            sx={{
              dispay: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="form">
              <Typography
                variant={"h4"}
                textAlign={"center"}
                component={"div"}
                color="primary"
                align="left"
                sx={{ pt: 2, pb: 1 }}
              >
                <Box className="fira-code">Add a new pin on the board</Box>
              </Typography>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Title:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="firstName"
                    placeholder="Add a title to your advert"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Location:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="lastName"
                    placeholder="Location"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Description:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    multiline
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="username"
                    placeholder="Tell others more about what you are looking for"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Field:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="email"
                    placeholder="what is your field / areas of interest?"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  pt: 4,
                  pb: 1,
                  gap: 2,
                }}
              >
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
                  // onClick={handleSubmitProfileChange}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddPin;
