import {base_url} from "../src/base_url"
import axios from "axios"

// Exercício 3
export type user = {
    id: string;
    name: string;
    email: string;
}

export const getSubscribersCorrect = async (): Promise<user[]> => {
    const response = await axios.get(`${base_url}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    })
}
