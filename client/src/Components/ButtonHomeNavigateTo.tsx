import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonHomeNavigateTo({ buttonText, destination }: ButtonProps) {
    const navigateTo = useNavigate()

    return (
        <Box>
            <Button
                variant='contained'
                color='secondary'
                size='large'
                onClick={() => navigateTo(destination)}
                sx={{ py: 1 }}
            >
                {buttonText}
            </Button>
        </Box>
    )
}

export default ButtonHomeNavigateTo