import React from "react";
import styled from "styled-components";
import axios from "axios";
import MatchList from "./MatchList"
import { useState, useEffect } from "react";

const ContainerTela = styled.div`
width: 500px;
height: 90vh;
background-color: white;
border: 2px solid pink;
display: flex;
justify-content: center;
margin: auto;
margin-top: 20px;
`

function TelaMatch() {
   const [matches, setMatches] = useState([]);
 
   useEffect(() => {
     axios
       .get(
         "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mazzi/matches"
       )
       .then((res) => {
         console.log(res.data.matches);
         setMatches(res.data.matches);
       });
   }, []);
 
   return (
     <div>
       {matches.map((profile) => {
         return <MatchList profile={profile} />;
       })}
     </div>
   );
 }
 
 export default TelaMatch;
 

