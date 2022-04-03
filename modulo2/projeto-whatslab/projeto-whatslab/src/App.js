import React from "react";
import styled from "styled-components";


const BodyContainer = styled.div`
height: 99vh;
width: 60%;
border: 3px solid green;
margin: auto;
display: flex;
flex-direction: column;
background-color: #98FB98;

`
const Textogrande = styled.h1`
text-align: center;
color:green;
`
const AreaTela = styled.div`
flex-grow:1;
padding: 10px;
display: flex;
flex-direction: column-reverse;
`
const InputPai = styled.div`
display: flex;
height: 40px;

`
const InputMensagem = styled.input`
flex-grow: 1;
border: 2px solid #98FB98;

`
const InputUsuario = styled.input`
width: 150px;
border: 2px solid #98FB98;
`
const Botao = styled.button`
width:80px;
cursor: pointer;
background-color: #98FB98;
`

class App extends React.Component {

  state = {
    mensagem: [],
    usuario: '',
    valorMensagem: ''
  }

  onChangeUsuario = (event) => {
    this.setState({ usuario: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({valorMensagem : event.target.value })
  }

  trocaMensagem = () => {
    const mensagemNova = {
      user: this.state.usuario,
      text: this.state.valorMensagem
    }

    const arrayDeNovaMensagem = [mensagemNova, ...this.state.mensagem]

    this.setState({ mensagem: arrayDeNovaMensagem, valorMensagem: '' })
  }

  render() {
    return (
        <BodyContainer>
          <Textogrande>WhatsLab</Textogrande>
          <AreaTela>
            {this.state.mensagem.map((mensagem) => {
              return <p>
                <strong>{mensagem.user}</strong>: {mensagem.text}
              </p>
            })}
          </AreaTela>
          <InputPai>
            <InputMensagem
              onChange={this.onChangeMensagem}
              value={this.state.valorMensagem}
              placeholder={'Mensagem'}
            />
            <InputUsuario
              onChange={this.onChangeUsuario}
              value={this.state.usuario}
              placeholder={'Usuario'}
            />
            <button onClick={this.trocaMensagem}>Enviar</button>
          </InputPai>
        </BodyContainer>
      
    );
  }

}
export default App;

