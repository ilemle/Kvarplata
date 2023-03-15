import axios, { AxiosError, AxiosResponse } from "axios";

import { AppDispatch } from "..";
import { authSlice } from "../reducers/AuthSlice";

import { authApi } from "../../api";
import { ITokensResponse } from "../../interfaces/auth";
import { FlashMessages } from "../../components/FlashMessage";
import { getClientIdentify } from "../../secret";
import { removeUserToken, setUserTokens } from "../../utils/enctyptedStoraged";

export const getToken = (username: string, password: string) => async (dispatch: AppDispatch) => {

    try {

        dispatch(authSlice.actions.authIsLoading())
        const clienIdenify = await getClientIdentify()
        const result: AxiosResponse<ITokensResponse> = await authApi.getToken(username, password, clienIdenify)
  
        !!result && dispatch(authSlice.actions.setAuthStatus(true)) && setUserTokens({
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

export const logout = () => async (dispatch: AppDispatch) => {

    try {

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