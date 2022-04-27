import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, Body, headers } from "../Constants/constants";
import { goToBack } from "../Coordinator/Coordinator"
import ListTripsPage from "./ListTripsPage";

function ApplicationFormPage() {
    const navigate = useNavigate()
    const [applyToTrip, setApplyToTrip] = useState({})

    useEffect(() => {
        apply()
    }, [])

    const apply = () => {

        axios
            .get(`${BASE_URL}trips/:id/apply`, Body, headers)
            .then((res) => {
                console.log(res.data);
                setApplyToTrip({
                    name: "",
                    age: "",
                    applicationText: "",
                    profession: "",
                    country: ""
                })
            })
            .catch((err)=>{
                alert(err.res)
            })
            }


    return (
        <div>
            <select>
                <input placeholder="Escolha sua Viagem"/>
            </select>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Idade" />
            <input type="text" placeholder="Texto de Candidatura" />
            <input type="text" placeholder="Profissão" />
            <input type="select" placeholder="Escolha seu Pais" />
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            <button>Enviar</button>

        </div>
    )
}

export default ApplicationFormPage