import express, { Express, response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {base_url} from "../src/base_url"
import axios from "axios"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${base_url}/subscribers`);
//     return response.data;
//   };
 
  const getSubscribers = () => {
    return axios
    .get(`${base_url}/subscribers`)
    .then(res =>res.data)
  }
  getSubscribers()
  .then(getSubscribers)
  .catch(erro => erro.response.data)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});