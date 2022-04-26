import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ListTripsPage from "./ListTripsPage";


export const HomePage = () => {
    const navigate = useNavigate()

const goToListTripsPage = () => {
    navigate("/viagens")
}

const goToAdminHomePage = () => {
    navigate("/areaadm")
}

    return (
        <div>
            <h1>LabeX</h1>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToAdminHomePage}  >Área de Administrador</button>
        </div>
    );
}

export default HomePage;
