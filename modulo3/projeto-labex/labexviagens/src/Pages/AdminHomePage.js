import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"


function AdminHomePage() {
    const navigate = useNavigate()

const goToHomePage = () => {
    navigate("/")
}

const goToCreateTripPage = () => {
    navigate("/criarviagem")
}

const goToLoginPage = () => {
    navigate("/login")
}

return (
    <div>
<button onClick={goToHomePage}>Voltar</button>
  <button onClick={goToCreateTripPage} >Inscrever-sa</button>
  <button onClick={goToLoginPage}>Logout</button>
  </div>
)
}

export default AdminHomePage
