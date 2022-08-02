import { Box, Typography } from "@mui/material";
import React from 'react'; 

function TextHeaderLine ({ text }: TextProp) {
  return (
      <Typography variant={"h3"} component={"div"}>
        <Box className="title-text fira-code">
          {text}
        </Box>
      </Typography>
  );
}

export default TextHeaderLine;