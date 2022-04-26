import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerHome = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;
`

const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 60px;
`
const ContainerButton = styled.div`
display: flex;
justify-content: center;
`
const Botao = styled.button`
  &:hover {
    background: #7165bf;
    color:white;
  }
margin-top: 50px;
margin-left: 5px;
margin-right: 5px;
padding: 10px;
background: #F5F4FC;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
font-size: 18px;
line-height: 10px;
display: flex;
align-items: center;
text-align: center;
color: #9F96D9;
border: solid #9F96D9 2px ;
cursor: pointer;
border-radius: 12px;
`

function HomePage() {
  return (
    <ContainerHome>
      <Title>LabeX</Title>
      <ContainerButton>
        <Botao>Ver Viagens</Botao>
        <Botao>Área de Administrador</Botao>
      </ContainerButton>
    </ContainerHome>
  );
}

export default HomePage;
