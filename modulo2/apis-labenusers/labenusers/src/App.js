import axios from "axios";
import React from "react";



export default class App extends React.Component {
  state = {
    user: [],
    nome: "",
    email: "",
  };
  componentDidMount() {
   
    this.getAllUsers();
  }
  criarUser = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    const headers= {
      headers:{
        Authorization: "Matheus-Jesuino-Shaw"
      },
    }

    axios.post(url, body, headers) 
    
    .then((res) => {
      this.getAllUsers
      alert(res.data.message)
      this.setState({
        nome:"",
        email:"",
      })
    }).catch((err) => {
     
      alert(err.message);
    })
  }

  onChangeNome = (ev) => {
    this.setState({ nome: ev.target.value })
  };

  onChangeEmail = (ev) => {
    this.setState({ email: ev.target.value })
  };

  render () {
    const renderUser = this.state.user.map((usuario) => {
      return <li key={user.id}>{user.nome}</li>
    })
    return (
      <div >
        <button>Proxima Tela </button>
        <h2>Preencha suas informações</h2>
        <input placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeNome}
        />
        <br />
        <input placeholder="Email"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.criarUser}> Adicionar Usuario </button>
      </div>
    );
  }
  }
