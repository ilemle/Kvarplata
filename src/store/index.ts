import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/AuthSlice'


const roorReducer = combineReducers({
    authReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: roorReducer,
    })
}

export type RootState = ReturnType<typeof roorReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']