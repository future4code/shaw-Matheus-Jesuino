import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../Routes/Coordinator"
import useProtectedPage from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Constants/Contants";
import useRequestData from "../Hooks/useRequestData";

const Comentar = styled.input`
width: 50%;
height: 70px;
`


export const DetalhePost = () => {
    const navigate = useNavigate()
    useProtectedPage()
    const params = useParams()
    const comentario = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)[0]
    console.log(comentario);

    const comentarios = () => {
        axios
            .post(`${BASE_URL}/posts/${params.id}/comments`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) =>{
                alert(res.data)
               
            })

            .catch((err) => {
                alert(err.data)
                
            })
    }

    const submitComentarios = (event) => {
        event.preventDefault()
        comentarios()
    }



    return (
        <form onSubmit={submitComentarios}>
            <button onClick={() => goToFeed(navigate)}>Voltar</button><br/><br/>
            
            <h3>{comentario && comentario.username}</h3><br/><br/>
            <h3>{comentario && comentario.body}</h3><br/><br/>    
                 
            <Comentar placeholder="Comentário"/>
            <button>Enviar</button>

        </form>
    );
}

export default DetalhePost;
