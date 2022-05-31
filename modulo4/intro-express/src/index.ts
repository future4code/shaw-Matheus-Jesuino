import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

// Exercicio 1 

app.get("/", function (req, res) {

    res.send("Hello User")
})

app.listen(3003, function () {
    console.log("Server is running in 3003")
});

// Exercicio 2

type User = {
    id: string | number,
    name: string,
    phone: number,
    email: string, 
    website: string
}

// Exercicio 3 

const usuarios: User[] = [
    {
    id: 200396,
    name: "Matheus",
    phone: 97716369,
    email: "mata@gmail.com",
    website: "www.dev.com.br",
},
{
    id: 123456,
    name: "Mina",
    phone: 984450102,
    email: "mina@gmail.com",
    website: "www.eumina.com.br",
},
{
    id: 654321,
    name: "Paula",
    phone: 897421225,
    email: "paulinha@gmail.com",
    website: "www.paulinha.com.br",
}, 
{
    id: 987654,
    name: "Vitor",
    phone: 51996322578,
    email: "vitor@gmail.com",
    website: "www.fresno.com.br",
}
]

// Exercicio 4

app.get("/usuarios", (req, res)=>{
    res.send(usuarios)
})

