import { instance } from "./instance"
import { IClientIdentify } from "../interfaces/auth"
import Base64 from "../utils/base64"

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
    }

}

export default authApi