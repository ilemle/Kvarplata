import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "..";
import {userApi} from "../../api";
import { FlashMessages } from "../../components/FlashMessage";
import { userSlice } from "../reducers/UserSlice";


export const getUserInfo = () => async (dispatch: AppDispatch) => {

    try {

        dispatch(userSlice.actions.userIsLoading())
        const result: AxiosResponse<any> = await userApi.getUserInfo()
        console.log('result user', result.data);

        !!result && dispatch(userSlice.actions.setUser(true))

    } catch (e) {
        const errors = e as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
            FlashMessages.FlashMessageError()
            dispatch(userSlice.actions.setUserError('Неизвестная ошибка'))
        }
        console.log(e);
        
        FlashMessages.FlashMessageError(errors.message)
        dispatch(userSlice.actions.setUserError(errors.message))

    }
}