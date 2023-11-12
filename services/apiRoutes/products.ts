// import { baseUrl } from "../constants"
// import { jsonContentType } from "../requestOptions"

// interface LoginData {
//     email: string;
//     password: string;
// }
// interface SignUpData {
//     email: string;
//     username: string;
//     password: string;
// }

// const AuthService = () => {
  
  
//     const LoginApi = (data: LoginData) => {
//         return fetch(`${baseUrl}/signIn`, jsonContentType('POST', data))
//     }


//     const SignupApi = (data: SignUpData) => {
//         return fetch(`${baseUrl}/user`, jsonContentType('POST', data))
//     }
//     return {LoginApi, SignupApi}
// }

// export default AuthService