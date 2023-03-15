import React, { useEffect } from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"
import Screen from "../components/Screen"

import { TextCustom } from "../components/TextCustom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { logout } from "../store/actionCreators.ts/authActions"
import { getUserInfo } from "../store/actionCreators.ts/userActions"

const HomeScreen = () => {

    const dispatch = useAppDispatch()
    const { userIsLoading } = useAppSelector(state => state.UserReducer)

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])

    return (<Screen viewStyle={styles.screen}>
        {
            userIsLoading ?
                <ActivityIndicator />
                :
                <TouchableOpacity onPress={() => dispatch(logout())}>
                    <TextCustom text={'LOGOUT'} />
                </TouchableOpacity>
        }
    </Screen >)

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default HomeScreen