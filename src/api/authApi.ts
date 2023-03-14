import axios from "axios"
import { instance } from "."
import Base64 from "../utils/base64"

const authApi = {

    getToken: (username: string, password: string) => {
        const clientId = 'k24-test_test123'
        const clientInstanceId = 'ClientInstance'
        const clientSecret = '050e1e2c-cdb4-47ca-b698-bf8fbf9a6ae1'
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