

export const errorMessageForUser = (message: string): string => {

    const errorCode = message.slice(-3, message.length)

    switch (errorCode) {
        case '500':
            return 'Неизвестная ошибка сервера'
        case '401':
            return 'Неверный логин или пароль'
        default:
            return 'Ошибка'
    }


}