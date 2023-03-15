import React, { useState } from "react"
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { getToken } from "../store/actionCreators.ts/authActions"

import Screen from "../components/Screen"
import { TextCustom } from "../components/TextCustom"
import { colors } from "../theme/colors"
import { spaceTextDeleter } from "../utils/validation"

const AuthScreen = () => {

    const { authIsLoading } = useAppSelector(state => state.authReducer)

    const dispatch = useAppDispatch()

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isVisibleDev, setIsVisibleDev] = useState<boolean>(false)

    const handleAuth = () => {
        dispatch(getToken(login, password))
    }

    const handleInputLogin = (login: string) => {
        const _login = spaceTextDeleter(login)
        setLogin(_login)
    }

    const handleInputPassword = (password: string) => {
        const _password = spaceTextDeleter(password)
        setPassword(_password)
    }

    return (
        <Screen viewStyle={styles.screen}>
            <>
                <TouchableOpacity
                    style={styles.testInfoButton}
                    onPress={() => setIsVisibleDev(!isVisibleDev)}>
                    <Text>i</Text>
                </TouchableOpacity>
                {
                    isVisibleDev &&
                    <View style={styles.testData}>
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
                            placeholderTextColor={colors.base_text}
                            style={styles.loginInput}
                            onChange={(input) => handleInputLogin(input.nativeEvent.text)}
                            value={login}
                        />
                        <TextInput
                            placeholder={'Ваш пароль'}
                            textAlign={'center'}
                            placeholderTextColor={colors.base_text}
                            style={styles.passwordInput}
                            onChange={(input) => handleInputPassword(input.nativeEvent.text)}
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
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
    authButton: {
        height: 50,
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.button_confirm
    },
    authText: {
        color: colors.secondary_text
    },
    testData: {
        position: 'absolute',
        top: 50,
        left: 35,
    },
    testInfoButton: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AuthScreen;