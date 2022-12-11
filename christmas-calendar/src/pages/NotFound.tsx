import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export function NotFound() {
    const navigate = useNavigate();
    const navigateTo = () => navigate("/");

    return (
        <div>
            <Button variant="contained" onClick={navigateTo} size="large" color="error">HO-HO-HOME</Button>
        </div>
    );
}