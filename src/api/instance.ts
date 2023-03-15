import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from 'react-native-dotenv'

import { getUserTokens } from "../utils/enctyptedStoraged";
import { ITokens } from "../interfaces/auth";
import { checkAuth } from "../store/actionCreators.ts/authActions";


export const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use(async (internalAxiosRequestConfig: InternalAxiosRequestConfig) => {

    const tokens: ITokens | undefined = await getUserTokens();


    // console.log('ACCESS TOKEN IN INTERCEPTOR', tokens.access_token);

    if (tokens?.access_token) {

        internalAxiosRequestConfig.headers.Authorization = `Bearer ${tokens.access_token}`;
        // internalAxiosRequestConfig.headers["Content-Type"] = 'application/json'
        return internalAxiosRequestConfig
    } else {
        return internalAxiosRequestConfig
    }
})

instance.interceptors.response.use((config: AxiosResponse) => {
    return config
},
    (error: AxiosError) => {
        const originalRequest = error.config
        try {
            if (error.response && error.response.status === 401) {
                checkAuth()
                return instance.request(originalRequest!)
            }
        } catch {
            console.log('NOT AUTH');
            
        }
    }
)