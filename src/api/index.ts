import axios, {InternalAxiosRequestConfig} from "axios";
import authApi from "./authApi";

export { authApi }

const baseURL = 'https://lk.kvp24.ru/'

export const instance = axios.create({
    // withCredentials:true,
    baseURL,
});

instance.interceptors.request.use((internalAxiosRequestConfig: InternalAxiosRequestConfig) => {

    internalAxiosRequestConfig.headers.Authorization = `Bearer `;

    return internalAxiosRequestConfig
})