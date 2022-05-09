import React from "react";
import axios from "axios";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToFeed, goToLogin} from "../Routes/Coordinator"


export const Post = () => {
    const navigate = useNavigate()



    return (
        <div>
            <h1>Post</h1>
            <input type="all" placeholder="Sua Postagem" />              
            <button onClick = {()=> goToFeed(navigate)}>Postar</button>
            
        </div>
    );
}

export default Post;