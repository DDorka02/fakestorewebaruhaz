// saját axios példány létrehozása, hogy tudjuk konfigurálni

import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout:10000,
    headers: {
        'Content-Type':'appication/json'
    }
})