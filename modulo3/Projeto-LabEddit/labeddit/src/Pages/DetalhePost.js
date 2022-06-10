import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../Routes/Coordinator"
import useProtectedPage from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Constants/Contants";
import useRequestData from "../Hooks/useRequestData";
import useForm from "../Hooks/useForm";

const Comentar = styled.input`
width: 50%;
height: 70px;
`


export const DetalhePost = () => {
    const navigate = useNavigate()
    useProtectedPage()
    const params = useParams()
    const comentario = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)[0]
    const [form, inputChange, clear] = useForm({ body: "" })
    console.log(comentario);



    const seuComentario = () => {

        axios
            .post(`${BASE_URL}/posts/${params.id}/comments`, form, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) => {
               alert(res.data)
               clear();
                
            })

            .catch((err) => {
               alert(err.data)
               clear();
            })


    }

    const submitcomentario = (event) => {
        event.preventDefault()
        seuComentario()
       comentarioFeitos()
       
        
    }

  


    const comentarioFeitos= () => {

        axios
            .get(`${BASE_URL}/posts/${params.id}/comments`,  {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) => {
               console.log( "Cadsaadadasdasdasdadê")
               
                
            })

            .catch((err) => {
                console.log(err)
               
            })           


    }
    

    // const recipesComentarios = posts.map((comments) => {
    //     return (
    //         <div>
                
    //             <li>{comments.title}</li>
    //             <li>{comments.body}</li>
    //         </div>
    //     )
    //     })
  
        return (
        <div>
            <button onClick={() => goToFeed(navigate)}>Voltar</button><br /><br />

           
            <h3>{comentario && comentario.username}</h3><br /><br />
            <h3>{comentario && comentario.body}</h3><br /><br />
            
         
           
      
            <form onSubmit={submitcomentario}>
                <Comentar
                    name={"body"}
                    value={form.body}
                    onChange={inputChange}
                    type={"text"}
                    required
                    placeholder="Deixe seu Comentario" />
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default DetalhePost;
