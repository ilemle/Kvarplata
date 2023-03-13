import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITokens } from "../../interfaces/auth"

interface AuthenticationSlice {
    token: null | ITokens,
    authIsLoading: boolean,
    authError: string | '',

    count: number,
}

const initialState: AuthenticationSlice = {
    token: null,
    authIsLoading: false,
    authError: '',

    count: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authSuccess(state, action: PayloadAction<ITokens>) {
            state.authIsLoading = false
            state.token = action.payload
            state.authError = ''
        },
        authIsLoading(state) {
            state.authIsLoading = true
        },
        setAuthError(state, action: PayloadAction<string>) {
            state.authIsLoading = false
            state.authError = action.payload
        },



        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload
        }
    }
})

export default authSlice.reducer