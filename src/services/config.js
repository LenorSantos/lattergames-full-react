import axios from "axios";

const time = 30000;

export const app = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: time,
});