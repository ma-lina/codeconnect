import { Box, Modal, Button, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from '../Context/AuthContext'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const ModalUpdateProfile:React.FC<ModalProps> = ({ open, close }) => {
  const { deleteProfile } = useContext(AuthContext);

  return (
    <div>
      <Modal 
        open={open} 
        onClose={close}>
        <Paper
        elevation={2}
        >
            <Box className="modal-style modal-style-paper" sx={{ p: 1 }}>
                <Box>
                <Box sx={{ p: 1 }}>
                    <Typography variant="body2">
                        Enter your changes
                    </Typography>
                </Box>
                <Box
                    sx={{
                    dispay: "flex",
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    <Box sx={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", py: 1, gap:2 }}>
                        <Button
                            startIcon={<CancelIcon />}
                            variant="contained"
                            color="secondary"
                            onClick={close}
                        >
                            Discard
                        </Button>
                        <Button
                            endIcon={<SaveIcon />}
                            variant="contained"
                            color="primary"
                            onClick={deleteProfile}
                        >
                            Save
                        </Button>
                    </Box>

                </Box>
                </Box>
            </Box>
        </Paper>
      </Modal>
    </div>
  );
}

export default ModalUpdateProfile;