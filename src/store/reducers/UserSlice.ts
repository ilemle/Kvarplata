import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/user";

interface AuthenticationSlice {
    user: IUser | null,
    userIsLoading: boolean,
    userError: string | '',
}

const initialState: AuthenticationSlice = {
    user: null,
    userIsLoading: false,
    userError: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.userIsLoading = false
            state.user = action.payload
            state.userError = ''
        },
        userIsLoading(state) {
            state.userIsLoading = true
        },
        setUserError(state, action: PayloadAction<string>) {
            state.userIsLoading = false
            state.userError = action.payload
        },


    }
})

export default userSlice.reducer