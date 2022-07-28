import { useContext } from "react";
import Button from "@mui/material/Button";
import { AuthContext } from "../Context/AuthContext";

function Logout() {
  const { logOut } = useContext(AuthContext);
  return (
    <Button onClick={logOut} variant="contained" color="primary">
      LOGOUT
    </Button>
  );
}

export default Logout;
