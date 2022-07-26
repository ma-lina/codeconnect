import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Input, IconButton, Avatar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { AuthContext } from "../Context/AuthContext";

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
      const blob = new Blob([e.target.files[0]]);
      setSelectedFile(blob);
    }
  };
  console.log("newUser", newUser);
  return (
    <div>
      <div>Signup</div>

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
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
              label="User Name"
              id="username"
              name="username"
              type="text"
              value={newUser.username ? newUser.username : ""}
              //    helperText={}
              onChange={handleChangeHandler}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              // error={}
              label="Email Address"
              variant="outlined"
              name="email"
              id="email"
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
              variant="outlined"
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
              <Avatar
                src={newUser?.image ? newUser.image : ""}
                sx={{ width: 56, height: 56, mr: "10px" }}
              />
              <label htmlFor="icon-button-file">
                <Input
                  id="icon-button-file"
                  type="file"
                  onChange={() => attachFileHandler}
                  style={{ display: "none" }}
                />
                {/*     "Choose Image" */}
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
                onClick={() => submitImage}
              >
                UPLOAD
              </Button>
            </FormControl>
          </div>

          <Button variant="contained" color="primary" onClick={signUp}>
            Sign up
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
