import { useContext } from "react";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser, setLoginUser, logIn } = useContext(AuthContext);

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  return <div>Login</div>;
};

export default Login;
