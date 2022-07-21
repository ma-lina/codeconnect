import React from "react";
import TextField from "@mui/material/TextField";

const Signup: React.FC = () => {
  const { newUser, setNewUser, selectedFile, setSelectedFile, submitImage } =
    useContext(AuthContext);

  const handleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const attachFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <div>Signup</div>
      <div>
        <TextField
          error={}
          variant="outlined"
          label="First Name"
          id="firstname"
          name="firstName"
          type="text"
          value={newUser.firstName ? newUser.firstName : ""}
          helperText={}
          onChange={}
          required
          fullWidth
        />
        <TextField
          error={}
          variant="outlined"
          label="Last Name"
          id="lastname"
          name="lastName"
          type="text"
          value={newUser.lastName ? newUser.lastName : ""}
          helperText={}
          onChange={}
          required
          fullWidth
        />
        <TextField
          error={}
          variant="outlined"
          label="username"
          id="username"
          name="userName"
          type="text"
          value={newUser.userName ? newUser.userName : ""}
          helperText={}
          onChange={}
          required
          fullWidth
        />
        <TextField
          error={}
          label="Email Address"
          variant="outlined"
          name="email"
          id="email"
          type="email"
          value={newUser.email ? newUser.email : ""}
          helperText={helperEmail}
          onChange={handleChangeEmail}
          required
          fullWidth
        />
        <TextField
          error={}
          variant="outlined"
          name="password"
          id="password"
          label="Password"
          type="password"
          value={newUser.password ? newUser.password : ""}
          helperText={}
          onChange={}
          required
          fullWidth
        />
      </div>
    </div>
  );
};

export default Signup;
