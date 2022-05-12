import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToLogin, goToDetalhePost } from "../Routes/Coordinator"
import useProtectedPage from "../Hooks/useProtectedPage";
import { BASE_URL } from "../Constants/Contants";
import useRequestData from "../Hooks/useRequestData";
import { useParams } from "react-router-dom";


const Postagens = styled.div`
width: 100%;
height: 20vh;
border: 1px solid black;
`
const CriarPost = styled.input`
width: 50%;
height: 70px;
`


export const Feed = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/posts`)
   
    const onClickPost = (id) => {
        goToDetalhePost(navigate, id)
    }

    const recipesFeed = recipes.map((recipe) => {
        return (
            <Postagens onClick ={()=> onClickPost(recipe.id) }>
                <p>{recipe.username}</p>
                <p>{recipe.title}</p>
                <p>{recipe.body}</p>
                
            </Postagens>
        )
    })

    return (
        <div>
            <h1>Feed</h1>
            <button onClick={() => goToLogin(navigate)}>Sair</button>
            <button onClick={() => goToCadastro(navigate)}>Cadastre-se</button><br/><br/><br/><br/>
            <CriarPost type={"text"} placeholder="Adicionar Post..."/>
            <button >Postar</button><br/><br/>               
            {recipesFeed}
        </div>
    );
}

export default Feed;
