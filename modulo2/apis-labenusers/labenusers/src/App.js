
import axios from "axios";
import React from "react";
import InputsCadastro from "./components/InputsCadastro/InputsCadastro";
import ListaUsuarios from "./components/ListaUsuarios/ListaUsuarios";
import { Button } from "./style";

class App extends React.Component {
  state = {
    pagina: 1,
    nomeInput: "",
    emailInput: ""
  };

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return (
          <InputsCadastro
            nomeValue={this.state.nomeInput}
            onChangeNome={this.onChangeNome}
            emailValue={this.state.emailInput}
            onChangeEmail={this.onChangeEmail}
            onClickCadastrar={this.cadastrarUsuario}
          />
        );
      case 2:
        return <ListaUsuarios />;
      default:
        return (
          <InputsCadastro
            nomeValue={this.state.nomeInput}
            onChangeNome={this.onChangeNome}
            emailValue={this.state.emailInput}
            onChangeEmail={this.onChangeEmail}
            onClickCadastrar={this.cadastrarUsuario}
          />
        );
    }
  };

  proximaPagina = () => {
    if (this.state.pagina === 1) {
      this.setState({
        pagina: this.state.pagina + 1
      });
    } else {
      this.setState({
        pagina: this.state.pagina - 1
      });
    }
  };

  onChangeNome = (event) => {
    this.setState({
      nomeInput: event.target.value
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      emailInput: event.target.value
    });
  };

  cadastrarUsuario = () => {
    const body = {
      name: this.state.nomeInput,
      email: this.state.emailInput
    };

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
      headers: {
        Authorization: "Matheus-Jesuino-Shaw"
      }
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert(`Usuário ${body.name} criado com sucesso!`);
        this.setState({
          nomeInput: "",
          emailInput: ""
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        {this.state.pagina === 1 ? (
          <Button onClick={this.proximaPagina}>Lista de usuários</Button>
        ) : (
          <Button onClick={this.proximaPagina}>Voltar para cadastro</Button>
        )}
        {this.renderizaPagina()}
      </div>
    );
  }
}

export default App;
