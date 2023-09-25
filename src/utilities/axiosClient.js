import axios from "axios";
import { getValidToken } from "./tokenClient";

const URL = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_LOCAL_BASE_URL : process.env.NEXT_PUBLIC_LIVE_BASE_URL
export const host = `${URL}/api`;
console.log('host',host)
const encoded = btoa(`${process.env.NEXT_PUBLIC_BASIC_USERNAME}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);
// Create an axios instance
export const useAxios = axios.create({
    baseURL: host,
    headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${encoded}`
    },
});
export const useAxiosFormData = axios.create({
    baseURL: host,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    },
});

export async function setToken() {
    const token = await getValidToken()
    if (token) {
        useAxios.defaults.headers.common["token"] = `Bearer ${token}`;
        useAxios.defaults.headers.common["Authorization"] =  `Basic ${encoded}`
    } else {
        delete useAxios.defaults.headers.common["Authorization"];
        delete useAxios.defaults.headers.common["token"];
    }
}

// Validates token, and removes it if it's invalid
setToken(getValidToken());
// setToken();
