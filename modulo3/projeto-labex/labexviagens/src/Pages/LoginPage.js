import React from "react";
import { useNavigate } from "react-router-dom";
import {goToHomePage} from "../Coordinator/Coordinator"

function LoginPage() {
    const navigate = useNavigate()


return (
    <div>
        <input placeholder="E-mail"/>
        <input placeholder="Senha"/>
<button onClick= {()=>goToHomePage(navigate)}>Voltar</button>
  <button>Entrar</button>
  
  </div>
)
}

export default LoginPage