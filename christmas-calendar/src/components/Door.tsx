import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { IDoor } from "../models/IDoor";

export const Door = (props: { door: IDoor }) => {
    const door = props.door;
    const [active, setActive] = useState(false)
    const [hasBeenOpened, setHasBeenOpened] = useState(false)
    const [open, setOpen] = useState(false);
    const today = Number(String(new Date().getDate()).padStart(2, '0'));

    useEffect(() => {
        setActive(door.day <= today);
        setHasBeenOpened(door.day < today);
    }, [door.day, today])

    const handleOpen = () => {
        setOpen(true);
        setHasBeenOpened(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:scale-125 hover:rotate-3 hover:z-10 transition duration-150 ease-in-out">
            <Button onClick={handleOpen} sx={buttonStyle} disabled={!active}>
                <Typography id="button-text" variant="h1" color={hasBeenOpened ? "black" : "gray"}>
                    {door.day}
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box id="snow" sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h2" color="darkred">
                        {door.title}
                    </Typography>
                    <Typography id="modal-modal-description" variant="h4" color="darkred">
                        {door.description}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

const buttonStyle = {
    position: "relative",
    width: "200px",
    height: "200px",
    backgroundImage:
        "repeating-linear-gradient(45deg, transparent 0px, transparent 25px,hsla(261,69%,36%,0.35) 25px, hsla(261,69%,36%,0.35) 27px,transparent 27px, transparent 51px),repeating-linear-gradient(135deg, transparent 0px, transparent 25px,hsla(261,69%,36%,0.35) 25px, hsla(261,69%,36%,0.35) 27px,transparent 27px, transparent 51px),repeating-linear-gradient(135deg, transparent 0px, transparent 50px,hsla(331,83%,53%,0.4) 50px, hsla(331,83%,53%,0.4) 52px,transparent 52px, transparent 102px),repeating-linear-gradient(45deg, transparent 0px, transparent 50px,hsla(331,83%,53%,0.4) 50px, hsla(331,83%,53%,0.4) 52px,transparent 52px, transparent 102px),repeating-linear-gradient(45deg, hsla(116,60%,21%,0.4) 0px, hsla(116,60%,21%,0.4) 2px,transparent 2px, transparent 102px),repeating-linear-gradient(135deg, hsla(116,60%,21%,0.4) 0px, hsla(116,60%,21%,0.4) 2px,transparent 2px, transparent 102px),linear-gradient(135deg, rgb(207,37,37),rgb(207,37,37));",
};

const modalStyle = {
    position: "absolute",
    borderRadius: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vh",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:
        "repeating-linear-gradient(249deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 32px),repeating-linear-gradient(307deg, transparent 0px, transparent 3px,rgb(255,255,255) 3px, rgb(255,255,255) 32px),linear-gradient(90deg, hsl(191,85%,78%),hsl(242.429,85%,78%),hsl(293.857,85%,78%),hsl(345.286,85%,78%),hsl(36.714,85%,78%),hsl(88.143,85%,78%),hsl(139.571,85%,78%));",
    // bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
