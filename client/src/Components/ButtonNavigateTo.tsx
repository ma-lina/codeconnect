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
            sx={{ py: 1 }}
            >
                {buttonText}
            </Button>
        </Box>
    )
}

export default ButtonNavigateTo