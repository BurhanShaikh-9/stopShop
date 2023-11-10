
"use client"
import AuthService from '@/services/authService'
import React, { useState } from 'react'
import {  PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi'
import logo from '../../assets/logo6.png'
import TokenService from '@/services/tokenService'

export const LoginComponent = () => {
    const { LoginApi } = AuthService();
    const {setTokenCookies} = TokenService();


    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const onChangeInput = (e: any) => {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setLoginData({ ...loginData, [fieldName]: fieldValue })
    }
    const onFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(loginData, 'dataa');
        LoginApi(loginData)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.cookies.get('token'),'cookieee');
                // setTokenCookies(res.token)
                console.log(res, 'response');
            })
            .catch((err) => {
                console.log(err, 'error');
            })
    }

    const [isPassword, setIsPassword] = useState(true)

    return (
        <React.Fragment>


            <div className="LoginMain">


                <section>

                    <div className="box">

                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />

                        <div className="container">
                            <div className="form">
                                <h2>ETHHEERAL ESSENCE</h2>
                                <form onSubmit={onFormSubmit}>
                                    <div className="inputBx">
                                        <input type="email" name='email' required onChange={onChangeInput} />
                                        <span>Login</span>
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="inputBx password">
                                        <input id="password-input" type={isPassword ? 'password' : 'text'} name="password" required onChange={onChangeInput} />
                                        <span>Password</span>
                                        <button className="password-control" onClick={(e) => {setIsPassword(!isPassword); e.preventDefault()}} >
                                            {
                                                isPassword ?
                                                <PiEyeClosedDuotone />
                                                    :
                                                <PiEyeDuotone />
                                            }
                                        </button>
                                        {/* <i className="fas fa-key" /> */}
                                    </div>
                                    <div className="inputBx">
                                        <button className='signInButton'>Login</button>
                                    </div>
                                </form>
                                <p>Forgot password? <a href="#">Click Here</a></p>
                                <p>Don't have an account <a href="#">Sign up</a></p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



        </React.Fragment>
    )
}
