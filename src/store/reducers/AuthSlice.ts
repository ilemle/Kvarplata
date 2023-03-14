import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface AuthenticationSlice {
    isAuth: boolean,
    authIsLoading: boolean,
    authError: string | '',
}

const initialState: AuthenticationSlice = {
    isAuth: false,
    authIsLoading: false,
    authError: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<boolean>) {
            state.authIsLoading = false
            state.isAuth = action.payload
            state.authError = ''
        },
        authIsLoading(state) {
            state.authIsLoading = true
        },
        setAuthError(state, action: PayloadAction<string>) {
            state.authIsLoading = false
            state.authError = action.payload
        },


    }
})

export default authSlice.reducer