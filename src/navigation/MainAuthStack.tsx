import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import AuthScreen from "../screens/AuthScreen";


const AuthStack = createNativeStackNavigator();

const MainAuthStack = () => {

    return (
        <AuthStack.Navigator screenOptions={{ contentStyle: styles.AuthStack }}>
            <AuthStack.Screen name={'Авторизация'} component={AuthScreen} />
        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({

    AuthStack: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    }
})

export default MainAuthStack