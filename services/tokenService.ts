// "use server"
import { baseUrl } from "./constants"
import { jsonContentType } from "./requestOptions"
// import { setCookie } from 'cookies-next';



const TokenService = () => {
    const setTokenCookies = (data: string) => {
        const currentTime = new Date();
        const expirationTime = new Date(currentTime.getTime() + 60000); 
    
    }
    return {setTokenCookies}
}

export default TokenService