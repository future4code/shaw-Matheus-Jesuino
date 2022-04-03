import React from "react";
class Etapa1 extends React.Component {

    state = {
        nome: "",
        idade:"",
        email:"",
        escolaridade:"",
      };
    Etapa1 = () => {
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h3>1. Qual o seu nome ?</h3>
            <input value={this.state.nome}
                onChange={this.onChangeNome} />

            <h3>2. Qual sua idade?</h3>
            <input value={this.state.idade}
                onChange={this.onChangeIdade} />

            <h3>3. Qual seu email?</h3>
            <input value={this.state.email}
                onChange={this.onChangeEmail} />

            <h3>3. Qual sua escolaridade?</h3>
            <input value={this.state.escolaridade}
                onChange={this.onChangeEscolaridade} />
        </div>
    
    )
}
}
export default Etapa1