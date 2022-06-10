import cors from "cors"
import express from "express";
import { contas, Conta } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.get("/contas", (req, res) => {
    try {
        res.status(201).send(contas);
    } catch (error) {
        console.log(error);
        res.status(400).send
    }
})

app.post("/contas/criar", (req, res) => {

    try {
        const { nome, CPF, novaDataNascimento } = req.body
        const [dia, mes, ano] = novaDataNascimento.split("/")
        const datanascimento: Date = new Date(`${ano}-${mes}-${dia}`)

        const idade: number = Date.now() - datanascimento.getTime()

        const idadeEmAnos: number = idade / 1000 / 60 / 60 / 24 / 365

        if (idadeEmAnos < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior de 18 anos")

        }

        contas.push({
            nome,
            CPF,
            datanascimento,
            saldo: 0,
            extrato: []
        })
        res.status(201).send("Conta Criada com Sucesso !!!")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})


