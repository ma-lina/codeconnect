import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonNavigateTo :React.FC<ButtonProps> = ({ buttonText, destination }) => {
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