import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToCadastro, goToLogin, goToPost} from "../Routes/Coordinator"


export const Feed = () => {
    const navigate = useNavigate()



    return (
        <div>
            <h1>Feed</h1>
            <button onClick = {()=> goToLogin(navigate)}>Entrar</button>           
            <button onClick = {()=> goToCadastro(navigate)}>Cadastre-se</button>
            <button onClick = {()=> goToPost(navigate)}>Postar</button>
            
        </div>
    );
}

export default Feed;
