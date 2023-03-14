import { getBuildId } from "react-native-device-info"
import { CLIENT_ID, CLIENT_SECRET } from "react-native-dotenv"

const clientId = CLIENT_ID
const clientSecret = CLIENT_SECRET

export const getClientIdentify = async () => {

    const clientInstanceId = await getBuildId()

    const clienIdenify = { clientId, clientSecret, clientInstanceId }
    return clienIdenify;
}