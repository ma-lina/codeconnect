import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ModalAddPin from "./ModalAddPin";
import { Tooltip } from "@mui/material";

export default function ButtonAddPin() {
  const [openAddPinModal, setOpenAddPinModal] = React.useState<boolean>(false);

  const toggle = (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!value) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return (
    <>
      <Box sx={{ pt: 1, m: 1 }}>
        <Tooltip title="Add a new pin on the board">
          <Fab
            onClick={() => toggle(openAddPinModal, setOpenAddPinModal)}
            color="primary"
            aria-label="add-pin"
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <ModalAddPin
        open={openAddPinModal}
        close={() => toggle(openAddPinModal, setOpenAddPinModal)}
      />
    </>
  );
}
