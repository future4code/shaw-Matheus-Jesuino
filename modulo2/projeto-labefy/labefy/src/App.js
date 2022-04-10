import React from "react";
import ListaPlaylist from "./pages/ListaPlaylist";
import CriarPlaylist from "./pages/CriarPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual: "criaplaylist"
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist />;
      case "listaplaylist":
        return <ListaPlaylist />;
      default:
        return <CriarPlaylist />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.mudaTela("criarplaylist")}>
          Crie sua Playlist
        </button>
        <button onClick={() => this.mudaTela("listaplaylist")}>
          Lista Playlist
        </button>
        <h1> </h1>
        {this.escolherTela()}
      </div>
    );
  }
}
