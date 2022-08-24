import { useContext, useLayoutEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../Context/AuthContext";
import TextHeaderLine from "../Components/TextHeaderLine";
import { Typography } from "@mui/material";
import ButtonNavigateTo from "../Components/ButtonNavigateTo";

const Login = () => {
  //removing background
  useLayoutEffect(() => {
    document.body.classList.remove("background-image");
    document.body.classList.remove("home-transition-settings");
  });

  const { loginUser, setLoginUser, user, logIn } = useContext(AuthContext);

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-transition-settings">
      <TextHeaderLine text="login" />
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
            required
            size="small"
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={handleChangeHandler}
          />
        </div>
        <Box sx={{ p: 1 }}>
          <Button
            type="submit"
            endIcon={<SendIcon />}
            variant="contained"
            onClick={logIn}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: "column",
        }}
      >
        <Typography variant="body2" sx={{ pt: 2 }}>
          You do not have an account yet?
        </Typography>
        <ButtonNavigateTo buttonText="sign up" destination="/signup" />
      </Box>
    </div>
  );
};

export default Login;
