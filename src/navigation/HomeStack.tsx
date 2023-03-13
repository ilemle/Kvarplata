import React from "react";
import { Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/AuthScreen";



const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        // <Stack.Navigator>
        //     <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        // </Stack.Navigator>
        <Text>HOME STACK</Text>
    )
}

export default HomeStack
