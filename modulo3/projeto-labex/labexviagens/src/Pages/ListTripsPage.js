import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"

function ListTripsPage() {
        const navigate = useNavigate()
    
    const goToHomePage = () => {
        navigate("/")
    }
    
    const goToApplicationFormPage = () => {
        navigate("/formulario")
    }

    return (
        <div>
<button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToApplicationFormPage} >Inscrever-sa</button>
      <h1>Lista de Viagens</h1>
      </div>
    )
}

export default ListTripsPage