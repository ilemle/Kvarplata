import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";



const MainNavigator = () => {

    const token = false

    return (
        <NavigationContainer>
            {token ? < HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator