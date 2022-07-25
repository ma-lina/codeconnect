import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";

const Signup = () => {
  const { newUser, setNewUser, setSelectedFile, submitImage } =
    useContext(AuthContext);

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: { userInput: e.target.value } });
  };

  const attachFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>Signup</div>
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
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={attachFileHandler}
          >
            upload file
          </Button>
          <input
            onChange={attachFileHandler}
            type="file"
            style={{ display: "none" }}
          />
        </div>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Signup;
