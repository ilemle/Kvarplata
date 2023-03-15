import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainAuthStack from "./MainAuthStack";
import MainHomeStack from "./MainHomeStack";
import { useAppSelector } from "../hooks/redux";



const MainNavigator = () => {

    const { isAuth } = useAppSelector(state => state.authReducer)

    return (
        <NavigationContainer  >
            {isAuth ? < MainHomeStack /> : <MainAuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator