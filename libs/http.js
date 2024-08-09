import axios from "axios";

let url = 'http://localhost:8080';

export async function getAxios(endpoint) {
    try {
        let res = await axios.get(`${url}/${endpoint}`);
        return res;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function postAxios(endpoint, body) {
    try {
        let res = await axios.post(`${url}/${endpoint}`, body);
        return res;
    } catch (error) {
        console.error(error);
        throw error
    }
}