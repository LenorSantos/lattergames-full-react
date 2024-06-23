import axios from "axios";

const time = 30000;

// baseURL: "http://54.94.159.91:3001",

export const app = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: time,
});