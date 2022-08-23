import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const FavoriteItemsDisplay:React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap:1, flexDirection: "column", pb:2 }}>          
        <Typography variant={"h5"} textAlign={"center"} component={"div"} color="primary" align="left">
            <Box className="fira-code">
            Your favourite items
            </Box>
        </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap:2, py:2 }}>          
        <Paper>Item 1</Paper>
        <Paper>Item 2</Paper>
        <Paper>Item 3</Paper>
      </Box>
    </Box>
  )
}

export default FavoriteItemsDisplay