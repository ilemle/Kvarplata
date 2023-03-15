import EncryptedStorage from "react-native-encrypted-storage";
import { ITokens } from "../interfaces/auth";

export async function setUserTokens(tokens: ITokens) {

    const { access_token, refresh_token } = tokens

    try {
        await EncryptedStorage.setItem(
            'user_tokens',
            JSON.stringify({
                access_token,
                refresh_token
            })
        );

    } catch (error) {
        console.log('err save token: ', error);
    }
}

export async function getUserTokens() {
    try {
        const tokenJson = await EncryptedStorage.getItem('user_tokens');
        if (tokenJson) {
            const tokens: ITokens = JSON.parse(tokenJson)
            return tokens
        }
    } catch (error) {
        console.log('error get token: ', error);
    }
}

export async function removeUserToken() {
    try {
        await EncryptedStorage.removeItem("user_tokens");
        console.log('removing tokens');
    } catch (error) {
        console.log('error remove tokens: ', error);
    }
}