import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

import {goToAdminHomePage,goToListTripsPage,} from "../Coordinator/Coordinator"


export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>LabeX</h1>
            <button onClick = {()=> goToListTripsPage(navigate)}>Ver Viagens</button>
            <button onClick= {()=>goToAdminHomePage(navigate)}  >Área de Administrador</button>
        </div>
    );
}

export default HomePage;
