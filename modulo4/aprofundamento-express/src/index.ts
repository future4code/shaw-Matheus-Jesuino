import express  from "express";
import cors from "cors"
import { afazeres } from "./data";

const app = express()

app.use (express.json())
app.use(cors())

// Exercicio 1

app.get("/ping", (req, res) => {       

    // Exercicio 4 

    const tarefasFeitas = afazeres.filter((tarefas)=>{
if (tarefas.completed===true)
return true
    })   
    res.send(tarefasFeitas)
})

app.post ("/create/:id", (req,res)=>{
    const idPerson = req.params.id
    const { idPlaylist } = req.query

    const { userId,id, tarefas, completed } = req.body

    // achar a pessoa dentre varias
    const [findPerson] = afazeres.filter((user) => {
        return user.id === idPerson
    })

    // Achar a playlist da minha pessoa
    const findPlaylist = findPerson.playlists.filter((play) => {
        if(play.id === idPlaylist){
            play.tracks.push({id,name,artist,url})
            return true
        }
    })

    res.send(findPlaylist)

})
})

// Exercicio 2

export type Users = {
    userId: number,
      id: number,
      tarefas: string,
      completed:boolean
}



app.listen(3003, () => {

    console.log("A porta 3000 está rodando! http://localhost:3000")
})

