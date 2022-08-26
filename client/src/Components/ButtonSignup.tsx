import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ButtonSignup() {
  const navigateTo = useNavigate();
  return (
    <Button
      onClick={() => navigateTo("/signup")}
      variant="contained"
      color="primary"
    >
      SIGN UP
    </Button>
  );
}

export default ButtonSignup;