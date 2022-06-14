import {base_url} from "../src/base_url"
import axios from "axios"
import {user} from "../src/ex3"
import {getSubscribers} from "../src/ex1"
import { getSubscribersArrow,} from "../src/ex2"
import {getSubscribersCorrect} from "../src/ex3"
import {createNews} from "../src/ex4"
import {sendNotifications} from "../src/ex5"
// Exercício 6

const sendNotificationsAllPromises = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`${base_url}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);
        console.log(`Notificações enviadas com sucesso`)

    } catch {
        console.log("Error");
    }
};

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        const subscribersArrow = await getSubscribersArrow()
        const subscriberCorrect = await getSubscribersCorrect()
        createNews("Brasil conquista hexa no catar", "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás", Date.now())
        sendNotifications(subscriberCorrect, "Olá, há uma nova notícia em nosso site")
        sendNotificationsAllPromises(subscriberCorrect, "Olá, sou uma notificação nova")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()