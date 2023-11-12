// "use server"
// "use client"
import { baseUrl } from "./constants"
import { jsonContentType } from "./requestOptions"
// import { setCookie } from 'cookies-next';
import { useCookies } from 'next-client-cookies';



const TokenService = () => {
    const cookies = useCookies();
    const setTokenCookies = (data: string) => {
        const currentTime = new Date();
        const expirationTime = new Date(currentTime.getTime() + 60000); 
        cookies.set('token', data
        ,{
            path:'/',
            expires: expirationTime,
        }
        )
    }
    return {setTokenCookies}
}

export default TokenService