import React from 'react'
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native"


interface ScreenProps {
    children: JSX.Element | never[],
    viewStyle?: ViewStyle,
}

const Screen = (props: ScreenProps) => {

    const { children, viewStyle } = props

    return <SafeAreaView
        style={[styles.container, viewStyle]}
    >
        {!!children ? children : null}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical:16,
    }
})

export default Screen;