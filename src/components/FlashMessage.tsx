import { showMessage, hideMessage, MessageOptions } from "react-native-flash-message"
import { errorCodeMessageForUser } from '../utils/errorMessageForUsers'



export class FlashMessages {

    static FlashMessageError = (message: string = 'Ошибка') => {

        const errorCode = message.slice(-3, message.length)
        const _message = Number.isInteger(+errorCode) ? errorCodeMessageForUser(errorCode) : message

        const config: MessageOptions = {
            message: _message,
            type: 'danger',
            hideOnPress: true,
            position: 'top',
        }

        showMessage(config)
    }

}