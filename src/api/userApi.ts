import { instance } from "./instance"

const userApi = {

    getUserInfo: () => {
        const name = '59999998022'
        console.log('getUserInfo');

        // return instance.get(`/tplus/v1/metering_device/59999998022`)
        return instance.get(`v1/profile`, { params: { name } })
    }

}

export default userApi