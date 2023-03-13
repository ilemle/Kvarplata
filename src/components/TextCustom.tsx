import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

interface TextCustomProps {
    text: string,
    textStyle?:TextStyle
}

export const TextCustom = (props:TextCustomProps) => {

    const {text,textStyle}=props

    return (
        <Text style={[styles.mainText,textStyle]}>
            {text}
        </Text>
    )
}

const styles=StyleSheet.create({
    mainText:{

    }
})