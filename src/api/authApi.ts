import { instance } from "./instance"
import { IClientIdentify } from "../interfaces/auth"
import Base64 from "../utils/base64"
import axios from "axios"

const authApi = {

    getToken: (username: string, password: string, clienIdenify: IClientIdentify) => {

        const { clientId, clientInstanceId, clientSecret } = clienIdenify
        const fullClientId = clientId + '_' + clientInstanceId
        const token = `${fullClientId}:${clientSecret}`
        const endCodeToken = Base64.btoa(token)

        return instance
            .post(`api/oauth/token?grant_type=password&username=${username}&password=${password}`,
                {},
                {
                    headers: {
                        'Authorization': `Basic ${endCodeToken}`,
                        'Content-Type': 'application/json'
                    },

                }
            )
    },
    refreshToken: (clienIdenify: IClientIdentify, refresh_token: string) => {

        const { clientId, clientInstanceId, clientSecret } = clienIdenify
        const fullClientId = clientId + '_' + clientInstanceId
        const token = `${fullClientId}:${clientSecret}`
        const endCodeToken = Base64.btoa(token)

        return axios
            .post(`https://lk.kvp24.ru/api/oauth/token`,
                {},
                {
                    headers: {
                        'Authorization': `Basic ${endCodeToken}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        refresh_token,
                        grant_type:'refresh_token'
                    }

                }
            )
    },
    
    logout: (username: string = '59999998022') => {
        return instance
            .get(`/v1/profile/logout`, { params: { name: username } })
    }

}

export default authApi