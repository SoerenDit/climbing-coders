import React from "react";
import { HomeButton } from "../components/HomeButton";
import { BrowserHistory } from "@remix-run/router";
import { useNavigate } from "react-router";
import { Box, Button } from "@mui/material";

export function NotFound() {
    const navigate = useNavigate();
    const navigateTo = () => navigate("/");


    return (
        <div className="h-screen flex justify-center items-center">
            <Button className="" variant="contained" onClick={navigateTo} size="large" color="error" >HO-HO-HOME</Button>
        </div>
    );
}