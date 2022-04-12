import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from "./components/Final"
import React from 'react';

export default class App extends React.Component {
  state = {
    pagina: 1,
  };
  irParaProximaEtapa = () => {
this.setState({pagina: this.state.pagina + 1})
  }
  render() {
  let paginaAtual;
    switch (this.state.pagina) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
    
    return (
      <div>
        {paginaAtual}
        {this.state.pagina <= 3 &&
        <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
        }
        </div>
    );
  }
  
}
