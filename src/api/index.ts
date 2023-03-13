import axios from "axios";
import authApi from "./authApi";

axios.defaults.baseURL='https://lk.kvp24.ru/'
export const instance = axios.create();

export { authApi }