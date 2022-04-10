import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class CriarPlaylist extends React.Component {
  state = {
    nomePlaylist: ""
  };

  pegarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nomePlaylist
    };
    const headers = {
      headers: {
        Authorization: "Matheus-Jesuino-Shaw"
      }
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert(`Playlist ${body.name} criada com Sucesso!`);
        this.setState({ nomePlaylist: "" });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };
  nomeMusicas = (eve) => {
    this.setState({ nomePlaylist: eve.target.value });
  };

  render() {
    return (
      <div>
        <h1>Crie Sua Playlist</h1>
        <input
          placeholder="Nome da Playlist"
          value={this.state.nomePlaylist}
          onChange={this.nomeMusicas}
          type="Text"
        />
        <button onClick={this.pegarPlaylist}>Criar Usuário</button>
        <h3>{this.state.nomePlaylist}</h3>
      </div>
    );
  }
}
