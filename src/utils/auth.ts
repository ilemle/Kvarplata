import { useAppSelector } from "../hooks/redux"
import { getUserTokens } from "./enctyptedStoraged"


export const checkUserIsAuth = async () => {

    const { isAuth } = useAppSelector(state => state.authReducer)
    const tokens = await getUserTokens()

    return !!isAuth && !!tokens ? true : false
}