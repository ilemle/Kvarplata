

export const errorCodeMessageForUser = (errorCode: string): string => {

    switch (errorCode) {
        case '500':
            return 'Неизвестная ошибка сервера'
        case '401':
            return 'Неверный логин или пароль'
        default:
            return 'Ошибка'
    }


}