import React from "react";
import {useNavigate } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage"
import {goToAdminHomePage,} from "../Coordinator/Coordinator"

function CreateTripPage() {
    const navigate = useNavigate()
       
    useProtectedPage()
    return (
        <div>
            <h1>Criar Viagem</h1>
            <input placeholder="Nome" />
            <input type="choice" placeholder="Escolha um Planeta" />
            <input type="date" placeholder="dd/mm/aa" />
            <input placeholder="Descrição" />
            <input placeholder="Duração em dias" />
            <button onClick= {()=>goToAdminHomePage(navigate)}>Voltar</button>
            <button >Criar</button>
        </div>
    )
}

export default CreateTripPage