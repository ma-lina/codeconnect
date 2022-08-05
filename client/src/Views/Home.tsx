import { Box, Typography } from "@mui/material";
import React, { useLayoutEffect } from "react";
import ButtonHomeNavigateTo from "../Components/ButtonHomeNavigateTo";

const Home :React.FC = () => {
  useLayoutEffect(() => {
    document.body.classList.add("background-settings")
    document.body.classList.add("background-image")
  })

  return (
    <>
      <Typography variant={"h1"} component={"div"} sx={{marginLeft:"0.8rem"}}>
        <Box className="homepage-text fira-code cursor white-cursor">
          codeconnect
        </Box>
      </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:"center", gap:4, p:2}}>
          <ButtonHomeNavigateTo buttonText="Login" destination="/login"/>
          <ButtonHomeNavigateTo buttonText="Sign up" destination="/signup"/>
        </Box>
    </>
  )
}

export default Home;
