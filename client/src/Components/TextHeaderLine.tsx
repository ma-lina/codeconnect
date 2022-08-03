import { Box, Typography } from "@mui/material";
import React from 'react'; 

function TextHeaderLine ({ text }: TextProps) {
  return (
      <Typography variant={"h3"} component={"div"}>
        <Box className="blue-text fira-code">
          {text}
        </Box>
      </Typography>
  );
}

export default TextHeaderLine;