import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import TripDetailsPage from "../Pages/TripDetailsPage"

function LoginPage() {
    const navigate = useNavigate()

const goToHomePage = () => {
    navigate("/")
}


return (
    <div>
        <input placeholder="E-mail"/>
        <input placeholder="Senha"/>
<button onClick={goToHomePage}>Voltar</button>
  <button>Entrar</button>
  
  </div>
)
}

export default LoginPage