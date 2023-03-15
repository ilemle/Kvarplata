import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../theme/colors";



const HomeStack = createNativeStackNavigator();

const MainHomeStack = () => {

    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.accent,
            },
            headerTintColor: colors.base_text,
        }}>
            <HomeStack.Screen name={'Профиль'} component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

export default MainHomeStack
