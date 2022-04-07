import React from "react";
import { CadastroContainer, CaixasInput } from "./style";

class InputsCadastro extends React.Component {
  render() {
    return (
      <CadastroContainer>
        <CaixasInput>
          <label>
            <input
              placeholder="Nome"
              value={this.props.nomeValue}
              onChange={this.props.onChangeNome}
            />
          </label>
          <label>
            <input
              placeholder="E-mail"
              value={this.props.emailValue}
              onChange={this.props.onChangeEmail}
            />
          </label>
          <button onClick={this.props.onClickCadastrar}>Criar Usuário</button>
        </CaixasInput>
      </CadastroContainer>
    );
  }
}

export default InputsCadastro;
