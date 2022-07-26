import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser, setLoginUser, logIn } = useContext(AuthContext);

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>Login</div>
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
            // error
            // helperText="Invalid email address."
            required
            size="small"
            id="email"
            label="E-mail"
            type="email"
            name="email"
            onChange={handleChangeHandler}
          />
        </div>
        <div>
          <TextField
            size="small"
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={handleChangeHandler}
          />
        </div>
        <div>
          <Button
            type="submit"
            endIcon={<SendIcon />}
            variant="contained"
            onClick={logIn}
          >
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
