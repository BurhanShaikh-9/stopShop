
"use client"
import AuthService from '../../../services/apiRoutes/authService'
import React, { useEffect, useState } from 'react'
import { PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi'
import logo from '../../assets/logo6.png'
import TokenService from '../../../services/tokenService'
import Link from 'next/link'
import { emailRegex } from '@/services/regex'
import { useForm } from 'react-hook-form'


export const SignupComponent = () => {
    const { SignupApi } = AuthService();
    const { setTokenCookies } = TokenService();
    const [isEmailValid, setIsEmailValid] = useState(true);


    type FormValues = {
        email: string,
        password: string,
        username: string
    }

    const formHook = useForm<FormValues>({mode:'onChange'});
    const { register, control, reset, handleSubmit, formState } = formHook
    const { errors, isValid, isDirty, isSubmitSuccessful } = formState;

    const onFormSubmit = (loginData: FormValues) => {

        console.log(loginData, 'dataa');
        SignupApi(loginData)
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

    const [isPassword, setIsPassword] = useState(true);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])


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
                                <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                                    <div className='formFieldRelative'>
                                        <div className="inputBx">
                                            <input type="text"  {...register('username', {
                                                required: { value: true, message: 'Username is Required' },
                                            })} />
                                            <span>Name</span>
                                        </div>
                                        <div className="inputBx">
                                            <input type="text" {...register('email', {
                                                required: { value: true, message: 'Email is Required' },
                                                pattern: { value: emailRegex, message: 'Invalid Email' },
                                            })} />
                                            <span>Email</span>
                                        </div>
                                        <div className="inputBx password">
                                            <input id="password-input" type={isPassword ? 'password' : 'text'} {...register('password', {
                                                required: { value: true, message: 'Password is Required' },
                                            })} />
                                            <span>Password</span>
                                            <button className="password-control" onClick={(e) => { setIsPassword(!isPassword); e.preventDefault() }} >
                                                {
                                                    isPassword ?
                                                        <PiEyeClosedDuotone />
                                                        :
                                                        <PiEyeDuotone />
                                                }
                                            </button>
                                        </div>
                                        {
                                            (errors.email || errors.username || errors.password) &&
                                            <p className='invalidInput formFieldAbsolute'>{errors?.email?.message || errors?.username?.message || errors?.password?.message}</p>
                                        }
                                    </div>
                                    <div className="inputBx">
                                        <button className="signInButton" disabled={!isValid || !isDirty}>Signup</button>
                                    </div>
                                </form>
                                <p>have an account <Link href="/login">Login</Link></p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



        </React.Fragment>
    )
}
