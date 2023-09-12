import { accessToken } from "../config/pageData";

export const accessToken = '_USER_ACCESS_TOKEN_' 
export async function getValidToken() {
    try {
        const token = sessionStorage.getItem(`${accessToken}`)
        if (token === null) {
            return null
        }
        return token;
    } catch (error) {
        return null;
    }
}

