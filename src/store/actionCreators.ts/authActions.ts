import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "..";
import { authSlice } from "../reducers/AuthSlice";
import { authApi } from "../../api";
import { ITokensResponse } from "../../interfaces/auth";

export const getToken = (username: string, password: string) => async (dispatch: AppDispatch) => {

    try {

        dispatch(authSlice.actions.authIsLoading())
        const result: AxiosResponse<ITokensResponse> = await authApi.getToken(username, password)

        dispatch(authSlice.actions.authSuccess({
            access_token: result.data.access_token,
            refresh_token: result.data.refresh_token
        }))
    } catch (e) {
        const errors = e as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
            dispatch(authSlice.actions.setAuthError('Ошибка'))
        }
        dispatch(authSlice.actions.setAuthError(errors.message))

    }
}