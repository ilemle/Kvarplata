import React, { useState } from "react"
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getToken } from "../store/actionCreators.ts/authActions"

import Screen from "../components/Screen"
import { TextCustom } from "../components/TextCustom"
import { colors } from "../theme/colors"

const AuthScreen = () => {

    const { authIsLoading } = useAppSelector(state => state.authReducer)

    const dispatch = useAppDispatch()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isVisibleDev, setIsVisibleDev] = useState<boolean>(false)

    const handleAuth = () => {
        dispatch(getToken(username, password))
    }

    return (
        <Screen viewStyle={styles.screen}>
            <>
                <TouchableOpacity
                    style={{ height: 50, width: 50, position: 'absolute', top: 25, left: 25, }}
                    onPress={() => setIsVisibleDev(!isVisibleDev)}>
                    <Text>i</Text>
                </TouchableOpacity>
                {
                    isVisibleDev &&
                    <View style={{ position: 'absolute', top: 50, left: 35, }}>
                        <Text>Тестовые данные для входа </Text>
                        <Text>username:   5 999 999 80 22</Text>
                        <Text>pasword:   PMTVTT6</Text>
                    </View>
                }

                {authIsLoading ?
                    <ActivityIndicator />
                    :
                    <>
                        < TextInput
                            placeholder={'Ваш логин'}
                            textAlign={'center'}
                            style={styles.loginInput}
                            onChange={(input) => setUsername(input.nativeEvent.text)}
                            value={username}
                        />
                        <TextInput
                            placeholder={'Ваш пароль'}
                            textAlign={'center'}
                            style={styles.passwordInput}
                            onChange={(input) => setPassword(input.nativeEvent.text)}
                            value={password}
                        />
                        <TouchableOpacity
                            onPress={handleAuth}
                            style={styles.authButton}
                        >
                            <TextCustom
                                text={'Авторизироваться'}
                                textStyle={styles.authText}
                            />
                        </TouchableOpacity>
                    </>}
            </>
        </Screen >
    )
}

const styles = StyleSheet.create({
    loginInput: {
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.input_background
    },
    passwordInput: {
        borderRadius: 10,
        marginTop: 24,
        height: 50,
        backgroundColor: colors.input_background
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    authButton: {
        height: 50,
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.button_confirm
    },
    authText: {
        color: colors.light_text
    }
})

export default AuthScreen;