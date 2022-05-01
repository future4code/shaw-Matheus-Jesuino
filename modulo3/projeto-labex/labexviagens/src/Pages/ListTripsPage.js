import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage, goToHomePage } from "../Coordinator/Coordinator";
import { BASE_URL } from "../Constants/constants";
import axios from "axios";


function ListTripsPage() {
    const navigate = useNavigate()
    const [getTrips, setGetTrips] = useState([])

    useEffect(() => {
        listTrips()
    }, [])

    const listTrips = () => {
        axios
            .get(`${BASE_URL}trips`)
            .then((res) => {
                console.log(res.data.trips)
                setGetTrips(res.data.trips)
            })
            .catch((err) => {
                alert(err.data.trips)
            })
    }
    
 const getList = getTrips.map((trip)=>{
return(
    <div key={trip.id} >
        <li>Viagem: {trip.planet}</li>
        <li>Atração: {trip.name}</li>
        <li>Descrição: {trip.description}</li>
    </div>
)
 })

    return (
        <div>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)} >Inscrever-sa</button>
            <h1>Lista de Viagens</h1>
            {getList}
            </div>
    )
}

export default ListTripsPage