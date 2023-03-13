import React from 'react'
import { showMessage, hideMessage, MessageOptions } from "react-native-flash-message"
import { errorMessageForUser } from '../utils/errorMessageForUsers'



export const FlashMessages = {

    FlashMessageError: (message: string = 'Ошибка') => {

        showMessage({
            message: errorMessageForUser(message),
            type: 'danger',
            hideOnPress: true,
        },)
    }

}