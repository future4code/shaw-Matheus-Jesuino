import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToLogin} from "../Routes/Coordinator"


export const Cadastro = () => {
    const navigate = useNavigate()



    return (
        <div>
            <h1>Cadastre-se</h1>
            <button onClick = {()=> goToLogin(navigate)}>Voltar</button>
            <input type="text" placeholder="Nome de Usuario" />  
            <input type="email" placeholder="Email" />  
            <input type="password" placeholder="Senha" />             
            <button onClick = {()=> goToLogin(navigate)}>Cadastrar</button>
            
        </div>
    );
}

export default Cadastro;
