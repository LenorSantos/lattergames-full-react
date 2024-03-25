import { app } from "./config";

export const getServices = {
    datetimeService: async () => {
        return await app.get('/datetime');
    },
    promosService: async () => {
        return await app.get('/promos');
    },
    newsService: async () => {
        return await app.get('/news');
    },
};