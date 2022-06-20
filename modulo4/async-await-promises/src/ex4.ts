import {base_url} from "../src/base_url"
import axios from "axios"

export async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${base_url}/news`, {
        title: title,
        content: content,
        date: date
    })
}