import React from "react";
import {useNavigate } from "react-router-dom";
import {goToCreateTripPage,goToHomePage,goToLoginPage} from "../Coordinator/Coordinator"


function AdminHomePage() {
    const navigate = useNavigate()

return (
    <div>
<button onClick= {()=>goToHomePage(navigate)}>Voltar</button>
  <button onClick= {()=>goToCreateTripPage(navigate)} >Inscrever-sa</button>
  <button onClick= {()=>goToLoginPage(navigate)}>Logout</button>
  </div>
)
}

export default AdminHomePage
