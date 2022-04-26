import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import AdminHomePage from "../Pages/AdminHomePage";
import CreateTripPage from "../Pages/CreateTripPage";
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"

function ApplicationFormPage() {
    const navigate = useNavigate()

const goToHomePage = () => {
    navigate("/viagens")
}


return (
    <div>
        <input type="select" placeholder="Escolha sua Viagem"/>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Idade"/>
        <input type="text" placeholder="Texto de Candidatura"/>
        <input type="text" placeholder="Profissão"/>
        <input type="select" placeholder="Escolha seu Pais"/>
<button onClick={goToHomePage}>Voltar</button>
  <button>Enviar</button>
 
  </div>
)
}

export default ApplicationFormPage