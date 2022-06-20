import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name
        let order = req.query.order
        let sort = req.query.sort
        let page = Number(req.query.page)

  

        if (name === "") {
            throw new Error("é obrigado a passar um nome")
        }

        if (sort !== "name" && sort !=="type") {
            sort="email"
        }
        
        if (order !== "asc" && order !=="desc") {
            sort="desc"
        }

        if (page < 1 || isNaN(page)) {
            page = 1 
         }
 
         const size = 5
 let offset = (page-1) * size


        const users = await connection("aula48_exercicio")
            .where("name", "like", `%${name}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

const FiltroUser = users.map(pegarUsers)
if (FiltroUser.length < 1) {
    throw new Error("Nenhum Usuario Encontrado");
    
}

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const pegarUsers = (input:any): users => {
return{
    id:input.id,
    name: input.name,
    email: input.email,
    type:input.type
}
}

export default async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}