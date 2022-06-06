import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import LoginPage from "../Pages/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage"

export const Router = () => {

    return (
        <div>
    <BrowserRouter>
        <Routes>
            < Route index element={<HomePage/>} />
            <Route path="Viagens" element={<ListTripsPage />} />
            <Route path="areaadm" element={<AdminHomePage/>} />
            <Route path="formulario" element={<ApplicationFormPage />} />
            <Route path="criarviagem" element={<CreateTripPage/>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="detalhes" element={<TripDetailsPage />} />
        </Routes>
    </BrowserRouter>
        </div>
    )
}