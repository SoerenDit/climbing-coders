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

  return (
    <div className="hover:scale-125 hover:rotate-3 hover:z-10 transition duration-150 ease-in-out">
      <Button onClick={handleOpen} sx={buttonStyle}>
        <Typography
          id="button-text"
          variant="h1"
          color="darkred"
        >
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {door.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vh",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
