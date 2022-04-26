import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;

`

const ContainerButton = styled.div`
display: flex;
margin-top: 100px;
`

const Buttons = styled.button`
margin-left: 5px;
margin-right: 5px;
padding: 10px;
background: #F5F4FC;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
font-size: 18px;
line-height: 10px;
display: flex;
color: #9F96D9;
border: solid #9F96D9 2px ;
cursor: pointer;
border-radius: 12px;
`
const Text = styled.h2`

`
function App() {
  return (
    <ContainerHome>
      <ContainerButton>
        <Buttons>Voltar</Buttons>
        <Buttons>Inscrever-sa</Buttons>
        
        <br></br><br></br>
        <Text>Lista de Viagens</Text>
      </ContainerButton>
    </ContainerHome>
  );
}

export default App;