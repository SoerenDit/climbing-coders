import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export function NotFound() {
    const navigate = useNavigate();
    const navigateTo = () => navigate("/");

    return (
        <div className="h-screen flex justify-center items-center">
            <Button className="" variant="contained" onClick={navigateTo} size="large" color="error" >HO-HO-HOME</Button>
        </div>
    );
}