import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"
import AdminHomePage from "./AdminHomePage";

function CreateTripPage() {
    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/areaadm")
    }


    return (
        <div>
            <h1>Criar Viagem</h1>
            <input placeholder="Nome" />
            <input type="choice" placeholder="Escolha um Planeta" />
            <input type="date" placeholder="dd/mm/aa" />
            <input placeholder="Descrição" />
            <input placeholder="Duração em dias" />
            <button onClick={goToAdminHomePage}>Voltar</button>
            <button >Criar</button>
        </div>
    )
}

export default CreateTripPage