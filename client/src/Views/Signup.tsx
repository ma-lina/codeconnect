import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import { Input, IconButton, Avatar, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { AuthContext } from "../Context/AuthContext";
import TextHeaderLine from "../Components/TextHeaderLine";
import ButtonNavigateTo from "../Components/ButtonNavigateTo";

//TODO Validation
//TODO secure url bar

const Signup = () => {
  const {
    newUser,
    setNewUser,
    selectedFile,
    setSelectedFile,
    submitImage,
    signUp,
  } = useContext(AuthContext);

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const attachFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e &&
      e.target &&
      e.target.files &&
      e.target.files.length > 0 &&
      e.target.files[0]
    ) {
      setSelectedFile(e.target.files[0]);
    }
  };
  console.log("newUser", newUser);
  return (
    <div>
      <TextHeaderLine text="signup"/>

      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              //  error={}
              size="small"
              label="First Name"
              id="firstname"
              name="firstName"
              type="text"
              value={newUser.firstName ? newUser.firstName : ""}
              //   helperText={}
              onChange={handleChangeHandler}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              //  error={}
              size="small"
              label="Last Name"
              id="lastname"
              name="lastName"
              type="text"
              value={newUser.lastName ? newUser.lastName : ""}
              // helperText={}
              onChange={handleChangeHandler}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              //   error={}
              size="small"
              label="Username"
              id="username"
              name="username"
              type="text"
              value={newUser.username ? newUser.username : ""}
              //    helperText={}
              onChange={handleChangeHandler}
              fullWidth
            />
          </div>
          <div>
            <TextField
              // error={}
              size="small"
              label="E-mail"
              id="email"
              name="email"
              type="email"
              value={newUser.email ? newUser.email : ""}
              // helperText={}
              onChange={handleChangeHandler}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              // error={}
              size="small"
              name="password"
              id="password"
              label="Password"
              type="password"
              value={newUser.password ? newUser.password : ""}
              //  helperText={}
              onChange={handleChangeHandler}
              required
              fullWidth
            />
          </div>
          <div>
            <FormControl>
              {/* TODO center Avatar correct */}
              <Avatar
                src={newUser.image ? newUser.image : ""}
                sx={{ width: 56, height: 56, mr: "10px" }}
              />
              <label htmlFor="icon-button-file">
                <Input
                  id="icon-button-file"
                  type="file"
                  onChange={attachFileHandler}
                  style={{ display: "none" }}
                />
                <div> {selectedFile ? "File ready" : "Choose Image"}</div>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Button
                variant="contained"
                size="small"
                sx={{ my: "10px", padding: "0px" }}
                disableElevation
                onClick={submitImage}
              >
                UPLOAD
              </Button>
            </FormControl>
          </div>

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="primary"
            onClick={signUp}
          >
            Sign up
          </Button>
        </Box>
      </div>
        <Typography variant="body2" sx={{ pt: 2 }}>
          You already have an account? 
        </Typography>
        <ButtonNavigateTo buttonText="login" destination="/login"/>
    </div>
  );
};

export default Signup;
