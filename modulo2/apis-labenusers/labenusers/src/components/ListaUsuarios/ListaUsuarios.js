import axios from "axios";
import React from "react";
import DetalhesUsuario from "../DetalhesUsuario/DetalhesUsuario";
import { Button, ContainerBusca, ContainerUsuario } from "./style";

class ListaUsuarios extends React.Component {
  state = {
    usuarios: [],
    pagina: 1,
    idUsuario: "",
    inputBusca: ""
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  // componentDidUpdate(prevState) {
  //     if (prevState.usuarios !== this.state.usuarios) {
  //         this.pegarUsuarios()
  //     }
  // }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
      headers: {
        Authorization: "Matheus-Jesuino-Shaw"
      }
    };

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  deletarUsuario = (usuario) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`;

    const headers = {
      headers: {
        Authorization: "Matheus-Jesuino-Shaw"
      }
    };

    if (
      window.confirm(
        `Tem certeza que deseja deletar o usuário ${usuario.name}?`
      )
    ) {
      axios
        .delete(url, headers)
        .then((res) => {
          alert(`O usuário ${usuario.name} foi deletado!`);
          this.pegarUsuarios();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert(`Usuário não deletado`);
    }
  };

  buscarUsuario = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBusca}`;

    const headers = {
      headers: {
        Authorization: "Matheus-Jesuino-Shaw"
      }
    };

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  trocarPaginaDetalhes = (usuarioId) => {
    if (this.state.pagina === 1) {
      this.setState({
        pagina: this.state.pagina + 1,
        idUsuario: usuarioId
      });
    } else {
      this.setState({
        pagina: this.state.pagina - 1,
        idUsuario: ""
      });
    }
  };

  onChangeInputBusca = (event) => {
    this.setState({
      inputBusca: event.target.value
    });
  };

  render() {
    const listaDeUsuarios =
      this.state.usuarios &&
      this.state.usuarios.map((usuario) => {
        return (
          <ContainerUsuario
            key={usuario.id}
            onClick={() => this.trocarPaginaDetalhes(usuario.id)}
          >
            <p>{usuario.name}</p>
            <button onClick={() => this.deletarUsuario(usuario)}>X</button>
          </ContainerUsuario>
        );
      });

    return (
      <div>
        {this.state.usuarios.length === 0 && <p>Carregando...</p>}
        {this.state.pagina === 1 ? (
          <div>
            <h4>Procurar Usuário</h4>
            <ContainerBusca>
              <input
                placeholder="Procure pelo nome"
                value={this.state.inputBusca}
                onChange={this.onChangeInputBusca}
              />
              <Button onClick={this.buscarUsuario}>Buscar</Button>
            </ContainerBusca>
            <hr />
            {listaDeUsuarios}
          </div>
        ) : (
          <DetalhesUsuario
            usuarioId={this.state.idUsuario}
            deletarUsuario={this.deletarUsuario}
            voltarParaLista={this.trocarPaginaDetalhes}
          />
        )}
      </div>
    );
  }
}

export default ListaUsuarios;
