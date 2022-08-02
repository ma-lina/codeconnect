import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonNavigateTo({ buttonText, destination }: ButtonProps) {
    const navigateTo = useNavigate()

    return (
        <Box>
            <Button
            variant='text'
            color="primary"
            onClick={() => navigateTo(destination)}
            sx={{ mr: 2, p: 0 }}
            >
                {buttonText}
            </Button>
        </Box>
    )
}

export default ButtonNavigateTo