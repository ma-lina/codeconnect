import React from "react";
import TextField from "@mui/material/TextField";

const Signup: React.FC = () => {
  const attachFileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return <div>Signup</div>;
};

export default Signup;
