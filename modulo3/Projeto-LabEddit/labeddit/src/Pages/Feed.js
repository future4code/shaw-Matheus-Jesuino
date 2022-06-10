import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToLogin, goToDetalhePost } from "../Routes/Coordinator"
import useProtectedPage from "../Hooks/useProtectedPage";
import { BASE_URL } from "../Constants/Contants";
import useRequestData from "../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import useForm from "../Hooks/useForm";


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
    const [form, inputChange, clear] = useForm({ title: "", body: "" })


    const onClickPost = (id) => {
        goToDetalhePost(navigate, id)
    }

    const criarPost = () => {

        axios
            .post(`${BASE_URL}/posts`, form, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) =>{
                alert(res.data)
                clear()
            })

            .catch((err) => {
                alert(err.data)
                clear()
            })


    }
    const submitForm = (event) => {
        event.preventDefault()
        criarPost()
    }


    const recipesFeed = recipes.map((recipe) => {
        return (
            <Postagens onClick={() => onClickPost(recipe.id)}>
                <p>{recipe.username}</p>
                <p>{recipe.title}</p>
                <p>{recipe.body}</p>
            </Postagens>
        )
    })

    return (
        <form onSubmit={submitForm}>
            <h1>Feed</h1>
            <button type={"submit"}>Sair</button>
            <button onClick={() => goToCadastro(navigate)}>Cadastre-se</button><br /><br /><br /><br />

            <CriarPost
                name={"title"}
                value={form.title}
                onChange={inputChange}
                type={"text"}
                required
                placeholder="Título do Post" />
            <CriarPost
                name={"body"}
                value={form.body}
                type={"text"}
                onChange={inputChange}
                required
                placeholder="Adicionar Post..." />
            <button >Postar</button><br /><br />


            {recipesFeed}
        </form>

    );
}

export default Feed;
