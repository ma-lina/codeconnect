import { Box, Typography } from "@mui/material";
import React from 'react'; 

const TextHeaderLine :React.FC<TextProps> = ({ text }) => {
  return (
      <Typography variant={"h3"} component={"div"}>
        <Box className="blue-text fira-code">
          {text}
        </Box>
      </Typography>
  );
}

export default TextHeaderLine;