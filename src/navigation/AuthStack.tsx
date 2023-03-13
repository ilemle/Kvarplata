import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../screens/AuthScreen";



const Stack = createNativeStackNavigator();

const AuthStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'AuthScreen'} component={AuthScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack