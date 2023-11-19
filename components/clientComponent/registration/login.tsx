
"use client"
import AuthService from '../../../services/apiRoutes/authService'
import React, { useState } from 'react'
import {  PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi'
import logo from '../../assets/logo6.png'
import TokenService from '../../../services/tokenService'
import Link from 'next/link'
import { emailRegex } from '@/services/regex'




export const LoginComponent = () => {
    const { LoginApi } = AuthService();
    const {setTokenCookies, setUserObject, getUserObject} = TokenService();
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const onChangeInput = (e: any) => {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;


        if (fieldName === 'email') {
            const isValid = emailRegex.test(fieldValue);
            setIsEmailValid(isValid);
        }

        setLoginData({ ...loginData, [fieldName]: fieldValue });
    };
    
    const onFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(loginData, 'dataa');
        LoginApi(loginData)
            .then((res) => res.json())
            .then((res) => {
                setTokenCookies(res.token)
                const {__v, email, username, phone, image, ...userData} = res.user;
                setUserObject(JSON.stringify(userData))
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
                                        <input type="text" name='email' required onChange={onChangeInput} />
                                        <span>Email</span>
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
                                    {
                                        !isEmailValid &&
                                        <p className='invalidInput'>*Invalid Email</p>
                                    }
                                    <div className="inputBx">
                                        <button className={`signInButton ${!isEmailValid && 'buttonDisabled'}`} disabled={!isEmailValid}>Login</button>
                                    </div>
                                </form>
                                <p>Forgot password? <a href="#">Click Here</a></p>
                                <p>Don't have an account <Link href="/signup">Sign up</Link></p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



        </React.Fragment>
    )
}
