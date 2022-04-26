import React from "react";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../Coordinator/Coordinator"

function ApplicationFormPage() {
    const navigate = useNavigate()



return (
    <div>
        <input type="select" placeholder="Escolha sua Viagem"/>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Idade"/>
        <input type="text" placeholder="Texto de Candidatura"/>
        <input type="text" placeholder="Profissão"/>
        <input type="select" placeholder="Escolha seu Pais"/>
<button onClick= {()=>goToBack(navigate)}>Voltar</button>
  <button>Enviar</button>
 
  </div>
)
}

export default ApplicationFormPage