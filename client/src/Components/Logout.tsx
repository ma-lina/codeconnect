import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../Context/AuthContext";

function Logout() {
  const { logOut } = useContext(AuthContext);
  const navigateTo = useNavigate();
  return (
    <Button
      onSubmit={() => navigateTo("/login")}
      variant="contained"
      color="primary"
    >
      SIGN UP
    </Button>
  );
}

export default Logout;
