import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToCadastro, goToFeed} from "../Routes/Coordinator"


export const Login = () => {
    const navigate = useNavigate()



    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />   
            <input type="password" placeholder="Senha" />     
            <button onClick = {()=> goToFeed(navigate)}>Entrar</button>     
            <button onClick = {()=> goToCadastro(navigate)}>Cadastre-se</button> 
        </div>
    );
}

export default Login;