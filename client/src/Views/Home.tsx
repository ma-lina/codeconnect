import { Box, Typography } from "@mui/material";
import React, { useLayoutEffect } from "react";
import ButtonHomeNavigateTo from "../Components/ButtonHomeNavigateTo";

const Home: React.FC = () => {
  useLayoutEffect(() => {
    document.body.classList.add("background-settings");
    document.body.classList.add("background-image");
    // document.body.classList.add("home-transition-settings");

  });

  return (
    <>
      <Typography
        variant={"h1"}
        component={"div"}
        sx={{ marginLeft: "0.8rem" }}
      >
        <Box className="homepage-text fira-code cursor white-cursor page-transition-settings">
          codeconnect
        </Box>
      </Typography>
      <Box
        className="home-transition-settings"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          p: 2,
        }}
      >
        <ButtonHomeNavigateTo buttonText="Login" destination="/login" />
        <ButtonHomeNavigateTo buttonText="Board" destination="/board" />
      </Box>
    </>
  );
};

export default Home;
