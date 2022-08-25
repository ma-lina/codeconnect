import { Box, Typography } from '@mui/material'
import React from 'react'
import FavoriteItemCard from './FavoriteItemCard'

const FavoriteItemsDisplay:React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap:1, flexDirection: "column", pb:2 }}>          
        <Typography variant={"h5"} textAlign={"center"} component={"div"} color="primary" align="left">
            <Box className="fira-code" textAlign="left">
            Your favourite items
            </Box>
        </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap:2, py:2 }}>
        <FavoriteItemCard/>
        <FavoriteItemCard/>
      </Box>
    </Box>
  )
}

export default FavoriteItemsDisplay