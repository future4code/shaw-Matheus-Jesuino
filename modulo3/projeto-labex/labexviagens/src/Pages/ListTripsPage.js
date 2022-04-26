import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage,goToHomePage} from "../Coordinator/Coordinator";


function ListTripsPage() {
        const navigate = useNavigate()
    
 

    return (
        <div>
<button onClick= {()=>goToHomePage(navigate)}>Voltar</button>
      <button onClick= {()=>goToApplicationFormPage(navigate)} >Inscrever-sa</button>
      <h1>Lista de Viagens</h1>
      </div>
    )
}

export default ListTripsPage