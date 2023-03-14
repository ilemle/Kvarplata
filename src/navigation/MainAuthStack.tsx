import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../screens/AuthScreen";



const AuthStack = createNativeStackNavigator();

const MainAuthStack = () => {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={'AuthScreen'} component={AuthScreen} />
        </AuthStack.Navigator>
    )
}

export default MainAuthStack