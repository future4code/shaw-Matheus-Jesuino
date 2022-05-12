import React from "react";
import axios, { Axios } from "axios";
import styled, { ThemeConsumer } from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToFeed } from "../Routes/Coordinator"
import useForm from "../Hooks/useForm";
import { BASE_URL } from "../Constants/Contants";
import useUnProtectedPage from "../Hooks/useUnProtectedPage";


export const Login = () => {
    useUnProtectedPage()
    const navigate = useNavigate()
    const [form, inputChange, clear] = useForm({ email: "", password: "" });


    const onSubmitForm = (event) => {
        event.preventDefault();
        login()
    }

    const login = () => {
        axios
            .post(`${BASE_URL}/users/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clear();
            })
            .catch((err) => {
                alert("Usúario não encontardo")
                clear();
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <h1>Login</h1>
                <input type={"email"}
                    placeholder="Email"
                    name={"email"}
                    value={form.email}
                    onChange={inputChange}
                    required
                />
                <input type={"password"}
                    placeholder="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={inputChange}
                    required
                />
                <button type={"submit"}>Entrar</button>
                <button onClick={() => goToCadastro(navigate)}>Cadastre-se</button>
            </form>


        </div>
    );
}

export default Login;
