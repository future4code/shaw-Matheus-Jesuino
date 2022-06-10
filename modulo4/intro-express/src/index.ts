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

// Exercício 5

type Post  = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// Exercício 6


const posts: Post[] = [
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd" 
        },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
]


// Exercício 7

app.get("/posts", (req, res) => {

    if(!posts.length){
       res.status(401).send("Não contém posts.")
    }

    res.status(201).send(posts)
})

// Exercício 8

app.get("/post/:userId", (req, res) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return res.status(400).send("Entre com outro usuario.")
     } else if(post.length === 0) {
        return res.status(400).send("Usuario não encontrado.")
     }
        
        res.status(201).send(post)   
})


app.listen(3000, () => {

    console.log("A porta 3000 está rodando! http://localhost:3000")
})

