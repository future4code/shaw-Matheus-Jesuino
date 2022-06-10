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


app.get("/ping", (req, res) => {
  res.send("Pong!")
})

// Exercício 4
app.get("/todos/completed/:isCompleted", (req, res) => {
  let isCompleted: any = req.params.isCompleted

  if (isCompleted === "true") {
    isCompleted = true
  } else if (isCompleted === "false") {
    isCompleted = false
  } else {
    res.send("Path param da tarefa deve ser 'true' ou 'false'")
  }

  const result = []

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === isCompleted) {
      result.push(todos[i])
    }
  }

  res.send(result)
})

// Exercício 5
app.post("/todos", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newTodo: ToDo = {
    userId,
    id: Date.now(),
    title,
    completed: false
  }

  todos.push(newTodo)

  res.send(todos)
})

// Exercício 6
app.put("/todos/:id/completed", (req, res) => {

  const id = Number(req.params.id)

  for (let todo of todos) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  }

  res.send(todos)
})

// Exercício 7
app.delete("/todos/:id", (req, res) => {

  const id = Number(req.params.id)

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1)
    }
  }

  res.send(todos)
})

app.get("/users/:userId/todos", (req, res) => {
  const userId = Number(req.params.userId)

  const result = []

  for (let todo of todos) {
    if (todo.userId === userId) {
      result.push(todo)
    }
  }

  res.send(result)
})

app.listen(3003, () => {

    console.log("A porta 3000 está rodando! http://localhost:3000")
})

