import React, { useEffect } from "react"
import { TouchableOpacity } from "react-native"
import Screen from "../components/Screen"

import { TextCustom } from "../components/TextCustom"
import { useAppDispatch } from "../hooks/redux"
import { logout } from "../store/actionCreators.ts/authActions"
import { getUserInfo } from "../store/actionCreators.ts/userActions"

const HomeScreen = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])

    return (<Screen>
        <TouchableOpacity onPress={() => dispatch(logout())}>
            <TextCustom text={'UNLOGIN'} />
        </TouchableOpacity>
    </Screen >)

}

export default HomeScreen