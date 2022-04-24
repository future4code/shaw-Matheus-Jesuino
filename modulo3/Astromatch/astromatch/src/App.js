import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TelaMatch from './components/TelaMatch'



const Container = styled.div`
width: 600px;
height: 88vh;
background-color: white;
border: 2px solid pink;
display: flex;
margin: auto;
flex-direction:column;
background-color: pink;
border: 1px solid blue;
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
  &:hover {
   background-color: #FF69B4;
  }
width: 260px;
background-color: pink;
border: 1px solid blue;
font-size: 50px;
margin-left: 300px;
margin-left:0px;
cursor: pointer;

`
const BotãoCoração = styled.button`
  &:hover {
   background-color: #FF69B4;
  }
width: 260px;
background-color: pink;
border: 1px solid blue;
font-size: 42px;
color : red;
margin-left: 300px;
margin-left:0px;
margin-right: 0px;
cursor: pointer;
`

const MeusMatch = styled.button`
 &:hover {
   background-color:#00BFFF ;
  }
width: 100px;
height: 80px;
display: flex;
background-color: #87CEFF;
font-size: 21px;
align-items:center;
justify-content: center;
cursor: pointer;
`
const Imagem = styled.img`
width: 290px;
height: 320px;
display: flex;
justify-content: center;
margin: auto;
margin-top: 20px;
`
const Nome = styled.div`
font-weight:bold;
display: flex;
justify-content: center;
margin: auto;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
const Bio = styled.div`
font-weight:bold;
display: flex;
justify-content: center;
margin: auto;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
const Idade = styled.div`
font-weight:bold;
display: flex;
justify-content: center;
margin: auto;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Botoes = styled.div`
display: flex;
flex-direction: row;
margin-left:0px;
margin-right: 0px;
`
const App = () => {
  const [perfil, setPerfil] = useState({})
  const [page, setPage] = useState("Home")


  useEffect(() => {
    getProfileToChoose();
  }, []);

  const TrocaPages = () => {
    switch (page) {
      case "Home":
        return <App />
      case "MeusMatches":
        return <TelaMatch />
      default:
        return <App />
    }
  }

  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Matheus-Jesuino-Shaw/person")
      .then((res) => {
        console.log(res.data);
        setPerfil(res.data.profile);
      })
      .catch((err) => console.log(err.response));
  }
  const postChoosePerson = (id, boolean) => {
    const body = { id: id, choice: boolean }
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Matheus-Jesuino-Shaw/choose-person", body)
      .then((res) => console.log(res), getProfileToChoose())
      .catch((res) => console.log(res.response))
  }

  return (
    <div>
      <div>
        <Astro>AstroMatch</Astro>
        {console.log(perfil)}
        <Container>
          <Imagem src={perfil.photo} />
          <Nome> {perfil.name}</Nome>
          <Bio> {perfil.bio}</Bio>
          <Idade> {perfil.age} anos</Idade>
          <Botoes>
            <Botãox onClick={() => postChoosePerson(perfil.id, false)}>&Chi;</Botãox>
            <BotãoCoração onClick={() => postChoosePerson(perfil.id, true)} >&#10084;</BotãoCoração>
            <MeusMatch onClick={() => TrocaPages("MeusMatches")}>&rarr;</MeusMatch>
          </Botoes>
        </Container>
      </div>
    </div>
  )
}

export default App