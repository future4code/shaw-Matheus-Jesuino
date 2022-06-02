import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToFeed, goToLogin } from "../Routes/Coordinator"
import useForm from "../Hooks/useForm";
import { BASE_URL } from "../Constants/Contants";
import useUnProtectedPage from "../Hooks/useUnProtectedPage";


export const Cadastro = () => {
    useUnProtectedPage()

    const navigate = useNavigate()
    const [form, inputChange, clear] = useForm({ username: "", email: "", password: "" })


    const onSubmitForm = (event) => {
        event.preventDefault();
        Cadastrar()
    }


    const Cadastrar = () => {
        axios
            .post(`${BASE_URL}/users/signup`, form)
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
                <h1>Cadastre-se</h1>
                <input
                type={"text"}
                    placeholder="Usúario"
                    name={"Nome de Usúario"}
                    value={form.username}
                    onChange={inputChange}
                    label={"username"}
                    required 
                    />
                <input type={"email"}
                    placeholder="Email"
                    name={"email"}
                    value={form.email}
                    onChange={inputChange}
                    label={"E-mail"}
                    required
                />
                <input type={"password"}
                    placeholder="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={inputChange}
                    label={"Password"}
                    required
                />

            </form>
            <button onClick={() => goToFeed(navigate)} type={"submit"} >Cadastrar</button>
            <button onClick={() => goToLogin(navigate)}>Voltar</button>


        </div>
    );
}

export default Cadastro;
