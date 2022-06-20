import {base_url} from "../src/base_url"
import axios from "axios"
import {user} from "../src/ex3"

// Exercício 5

export async function sendNotifications(users: user[],
    message: string): Promise<void> {

    try {
        for (const user of users) {
            await axios.post(`${base_url}/notifications`, {
                subscriberId: user.id,
                message
            });
        }

        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
}