import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from 'react-native-dotenv'

import { getUserTokens } from "../utils/enctyptedStoraged";
import { ITokens } from "../interfaces/auth";


export const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use(async (internalAxiosRequestConfig: InternalAxiosRequestConfig) => {

    const tokens: ITokens | undefined = await getUserTokens();

    if (tokens?.access_token) {

        internalAxiosRequestConfig.headers.Authorization = `Bearer ${tokens.access_token}`;

    } else {

    }


    return internalAxiosRequestConfig
})