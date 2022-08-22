import { Alert, Box, Modal, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from '../Context/AuthContext'
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ModalAlertDeleteAccount:React.FC<ModalProps> = ({ open, close }) => {
  const { deleteProfile } = useContext(AuthContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <Modal 
        open={open} 
        onClose={close} 
        aria-labelledby="warning">
        <Box sx={style}>
          <Alert severity="warning">
            <Box>
              <Box sx={{ pb: 1 }}>
                You are about to permanently delete this user account. Are you sure you want to
                proceed?
              </Box>
              <Box
                sx={{
                  dispay: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ py: 1 }}>
                  <Button
                    startIcon={<ArrowBackIosIcon />}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={close}
                  >
                    Go back
                  </Button>
                </Box>
                <Box sx={{ py: 1 }}>
                  <Button
                    fullWidth
                    endIcon={<DeleteIcon />}
                    variant="contained"
                    color="secondary"
                    onClick={deleteProfile}
                  >
                    Yes, delete
                  </Button>
                </Box>
              </Box>
            </Box>
          </Alert>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAlertDeleteAccount;
