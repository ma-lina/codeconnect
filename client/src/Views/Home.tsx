import { Box, Typography } from "@mui/material";
import React, { useLayoutEffect } from "react";
import TextHeaderLine from "../Components/TextHeaderLine";

function Home() {
  useLayoutEffect(() => {
    document.body.classList.add("background-settings")
    document.body.classList.add("background-image")
  })

  return (
    <>
      <TextHeaderLine text="codeconnect"/>
    </>
  )
}

export default Home;
