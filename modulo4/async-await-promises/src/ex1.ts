import {base_url} from "../src/base_url"
import axios from "axios"


export async function getSubscribers(): Promise<any[]> {
    const response = await axios
        .get(`${base_url}/subscribers`)

    return response.data
}

getSubscribers()