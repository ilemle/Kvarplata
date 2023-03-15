import { instance } from "./instance"

const userApi = {

    getUserInfo: () => {
        const name = 'Sasha'
        console.log('getUserInfo');
        console.log('instance', );

        return instance.get(`v1/profile`, { params: { name } })
    }

}

export default userApi