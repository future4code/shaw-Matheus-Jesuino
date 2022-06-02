import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Pages/Login"
import Cadastro from "../Pages/Cadastro"
import Feed from "../Pages/Feed"
import DetalhePost from "../Pages/DetalhePost"


export const Router = () => {


    return (
        <div>
    <BrowserRouter>
        <Routes>
            < Route index element={<Login/>} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="feed" element={<Feed/>} />
            <Route path="detalhepost/:id" element={<DetalhePost />} />
           
        </Routes>
    </BrowserRouter>
        </div>
    )
}
