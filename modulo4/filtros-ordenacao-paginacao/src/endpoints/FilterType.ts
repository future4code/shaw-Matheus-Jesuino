import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.query.type


        if (!users.length) {
            res.statusCode = 404
            throw new Error("é obrigado a passar um nome")
        } 

        const users = await connection("aula48_exercicio")
        .where("type", "like", `%${type}%`)    
    

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}