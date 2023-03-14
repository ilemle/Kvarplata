import { instance } from "."
import { IClientIdentify } from "../interfaces/auth"

const userApi = {

    getUserInfo: () => {
        return instance
            .get(`v1/profile`)
    }

}

export default userApi