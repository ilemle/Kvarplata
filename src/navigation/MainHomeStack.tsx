import React from "react";
import { Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";



const HomeStack = createNativeStackNavigator();

const MainHomeStack = () => {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

export default MainHomeStack
