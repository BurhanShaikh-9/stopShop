// "use server"
// "use client"
import { baseUrl } from "./constants"
import { jsonContentType } from "./requestOptions"
// import { setCookie } from 'cookies-next';
import { useCookies } from 'next-client-cookies';

interface userObjReponse {
    id: string;
    userType: number
}

const TokenService = () => {
    const cookies = useCookies();
    const currentTime = new Date();
    const expirationTime = new Date(currentTime.getTime() + 60000);

    const setTokenCookies = (data: string) => {
        cookies.set('token', data,
            {
                path: '/',
                expires: expirationTime,
            }
        )
    }
    const setUserObject = (data: string) => {
        cookies.set('user', data,
            {
                path: '/',
                expires: expirationTime,
            }
        )
    }
    const getUserObject = () => {
        const userObj = cookies.get('user');
        return userObj ? JSON.parse(userObj) : null
    }

    const getTokenCookies = () => {
        const token = cookies.get('token');
        return token ? token : null
    }

    const isAuthenticated = () => {
        const userObj = cookies.get('user');
        const obj = userObj ? JSON.parse(userObj) : null;
        if (obj) {

            const isUserType = obj.userType;
            if (isUserType === 2) {
                return true
            }
            return false
        }
        return false
    }

    return { setTokenCookies, getTokenCookies, setUserObject, getUserObject, isAuthenticated }
}

export default TokenService