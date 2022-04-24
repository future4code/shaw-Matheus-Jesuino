import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
text-align:center;
`

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <Container>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <Card pokemon={pokeName} />}
    </Container>
  );
};

export default App;
