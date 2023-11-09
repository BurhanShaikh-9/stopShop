import { baseUrl } from "./constants"
import { jsonContentType } from "./requestOptions"

interface LoginData {
    email: string;
    password: string;
}

const AuthService = () => {
    const LoginApi = (data: LoginData) => {
        return fetch(`${baseUrl}/signIn`, jsonContentType('POST', data))
    }
    return {LoginApi}
}

export default AuthService