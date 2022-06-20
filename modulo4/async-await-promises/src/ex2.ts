import {base_url} from "../src/base_url"
import axios from "axios"

export const getSubscribersArrow = async (): Promise<any[]> => {
    const response = await axios.get(`${base_url}/subscribers`)
    return response.data
}