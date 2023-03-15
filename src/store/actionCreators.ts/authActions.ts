import axios, { AxiosError, AxiosResponse } from "axios";

import { AppDispatch } from "..";
import { authSlice } from "../reducers/AuthSlice";

import { authApi } from "../../api";
import { ITokens, ITokensResponse } from "../../interfaces/auth";
import { FlashMessages } from "../../components/FlashMessage";
import { getClientIdentify } from "../../secret";
import { getUserTokens, removeUserToken, setUserTokens } from "../../utils/enctyptedStoraged";

export const getToken = (username: string, password: string) => async (dispatch: AppDispatch) => {

    try {

        dispatch(authSlice.actions.authIsLoading())
        const clienIdenify = await getClientIdentify()
        const result: AxiosResponse<ITokensResponse> = await authApi.getToken(username, password, clienIdenify)

        !!result.data.access_token && dispatch(authSlice.actions.setAuthStatus(true)) && setUserTokens({
            access_token: result.data.access_token,
            refresh_token: result.data.refresh_token,
        })

    } catch (e) {
        const errors = e as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
            FlashMessages.FlashMessageError()
            dispatch(authSlice.actions.setAuthError('Неизвестная ошибка'))
        }

        FlashMessages.FlashMessageError(errors.message)
        dispatch(authSlice.actions.setAuthError(errors.message))

    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {

    try {
        console.log('check auth start');

        dispatch(authSlice.actions.authIsLoading())
        const clienIdenify = await getClientIdentify()

        const tokens: ITokens | undefined = await getUserTokens()

        const result: AxiosResponse<ITokensResponse> = await authApi.refreshToken(clienIdenify, tokens?.refresh_token!)
        console.log('result AuthCheck', result.data.access_token);
        
        !!result.data.access_token && dispatch(authSlice.actions.setAuthStatus(true)) && setUserTokens({
            access_token: result.data.access_token,
            refresh_token: result.data.refresh_token,
        })

    } catch (e) {
        
        const errors = e as AxiosError;
        if (!axios.isAxiosError(errors)) {
            FlashMessages.FlashMessageError()
            dispatch(authSlice.actions.setAuthError('Неизвестная ошибка'))
        }
        if (errors.response?.status === 401) {
            dispatch(authSlice.actions.setAuthStatus(false))
        }
        FlashMessages.FlashMessageError('refresh invalid')
        dispatch(authSlice.actions.setAuthError(errors.message))

    }
}

export const logout = () => async (dispatch: AppDispatch) => {

    try {

        const result = await authApi.logout()
        console.log('result logout', result);

        dispatch(authSlice.actions.setAuthStatus(false))
        removeUserToken()

    } catch (e) {
        const errors = e as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
            FlashMessages.FlashMessageError('Неизвестная ошибка')
        }

        FlashMessages.FlashMessageError(errors.message)

    }
}