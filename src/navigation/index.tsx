import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainAuthStack from "./MainAuthStack";
import MainHomeStack from "./MainHomeStack";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { checkAuth } from "../store/actionCreators.ts/authActions";



const MainNavigator = () => {

    const { isAuth } = useAppSelector(state => state.authReducer)
    

  

    return (
        <NavigationContainer  >
            {isAuth ? < MainHomeStack /> : <MainAuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator