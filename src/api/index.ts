import axios, { InternalAxiosRequestConfig } from "axios";
import { ITokens } from "../interfaces/auth";
import { getUserTokens } from "../utils/enctyptedStoraged";
import authApi from "./authApi";

export { authApi }

const baseURL = 'https://lk.kvp24.ru/'

export const instance = axios.create({
    // withCredentials:true,
    baseURL,
});

instance.interceptors.request.use(async (internalAxiosRequestConfig: InternalAxiosRequestConfig) => {

    const tokens: ITokens | undefined = await getUserTokens();
    console.log(tokens?.access_token);
    
    if (tokens?.access_token) {

        internalAxiosRequestConfig.headers.Authorization = `Bearer ${tokens.access_token}`;

    } else {

    }


    return internalAxiosRequestConfig
})