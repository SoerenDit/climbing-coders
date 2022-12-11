import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { IDoor } from "../models/IDoor";

const Door = (props: { door: IDoor }) => {
  const door = props.door;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var today = Number(String(new Date().getDate()).padStart(2, '0'));


  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle} disabled={door.day > today}>
        <Typography id="button-text" variant="h1" color="darkred">
          {door.day}
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="snow" sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h2" align="center" color="darkred">
            {door.title} {door.day <= today ? "åben" : "lukket"}
          </Typography>
          <Typography id="modal-modal-description" variant="h4" color="darkred">
            {door.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Door;

const buttonStyle = {
  position: "relative",
  width: "200px",
  height: "200px",
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
};

const modalStyle = {
  position: "absolute",
  borderRadius: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vh",
  height: "90vh",
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
