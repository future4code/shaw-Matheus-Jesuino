import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Coordinator/Coordinator"
import { goToAdminHomePage } from "../Coordinator/Coordinator";
import axios from "axios";
import { BASE_URL } from "../Constants/constants"
import useProtectedPage from "../Hooks/useProtectedPage"

function LoginPage() {
  const navigate = useNavigate()
  const [login, setLogin] = useState([])
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  useProtectedPage()

  const Login = () => {
    const body = {
      email: email,
      password: senha
    }
    axios
      .post(`${BASE_URL}login`, body)
      .then(res => {        
        alert("Bem-Vindo", res.data);
        window.localStorage.setItem("token", res.data.token)
        {goToAdminHomePage(navigate)}
      })
      .catch((err) => {
        alert("Usuario não Cadastrado" , err.response);
      })
  }

  const onChangeEmail = (ev) => {
    setEmail(ev.target.value)
  }

  const onChangeSenha = (ev) => {
    setSenha(ev.target.value)
  }

  return (
    <div>
      <input onChange={onChangeEmail} placeholder="E-mail" type="email" value={email} />
      <input onChange={onChangeSenha} placeholder="Senha" type="password" value={senha} />
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => Login(navigate)}>Entrar</button>

    </div>
  )
}

export default LoginPage