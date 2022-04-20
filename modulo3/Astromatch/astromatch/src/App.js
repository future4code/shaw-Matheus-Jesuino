import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import img from "./coração.png"
import imagem from "./negação.png"


const Container = styled.div`
width: 500px;
height: 85vh;
background-color: white;
border: 2px solid pink;
display: flex;
margin: auto;
`

const Astro = styled.h3`
color: #FF69B4;
justify-content: center;
display: flex;
`
const Match = styled.h3`
color: blue;
`
const Botãox = styled.button`

width: 250px;
height:100px;
margin-top: 392px;
background-color: pink;
border: 1px solid blue;
font-size: 50px;
`
const BotãoCoração = styled.button`
width: 250px;
height:100px;
background-color: pink;
border: 1px solid blue;
font-size: 42px;
color : red;
`

const MeusMatch = styled.button`
width: 40px;
height: 40px;
display: flex;
margin-left: 460px;
background-color: #87CEFF;
font-size: 21px;
align-items:center;
`

const App = () => {

  
    return (
      <div>
        <Astro>AstroMatch</Astro>
        <Container>
          <div>
            <MeusMatch>&rarr;</MeusMatch>
            <Botãox>&Chi;</Botãox>
            <BotãoCoração>&#10084;</BotãoCoração>
          </div>
        </Container>
      </div>

    )
  }


export default App