
"use client"
import AuthService from '../../../services/apiRoutes/authService'
import React, { useEffect, useState } from 'react'
import { PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi'
import logo from '../../assets/logo6.png'
import TokenService from '../../../services/tokenService'
import Link from 'next/link'
import { emailRegex } from '@/services/regex'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { toast, ToastContainer } from "react-toastify";



export const LoginComponent = () => {
    const { LoginApi } = AuthService();
    const { setTokenCookies, setUserObject, getUserObject } = TokenService();

    type FormValues = {
        email: string,
        password: string
    }

    const formHook = useForm<FormValues>({ mode: 'onChange' });
    const { register, control, reset, handleSubmit, trigger, formState } = formHook
    const { errors, isValid, isDirty, isSubmitSuccessful } = formState;

    const onFormSubmit = async (loginData: FormValues) => {
        console.log(loginData, 'dataa');
        
        try {
            const res = await LoginApi(loginData);
    
            if (res.status === 200) {
                console.log('if is working');
                const jsonData = await res.json();
                console.log(jsonData, 'login response');
                if (jsonData.token && jsonData.user) {
                    setTokenCookies(jsonData.token);
                    const { __v, email, username, image, phone, ...userData } = jsonData.user;
                    setUserObject(JSON.stringify(userData));
                    reset();
                    return;
                }
            } 
            else if (res.status === 400) {
                toast.error('Invalid Email')
            }
            else if(res.status === 401){
                toast.error('Invalid Password')
            }
        } catch (err) {
            console.log(err, 'error');
            // trigger();
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            trigger();
        }
    }, [isSubmitSuccessful, reset]);

    const [isPassword, setIsPassword] = useState(true)

    return (
        <React.Fragment>

            {/* <DevTool control={control}></DevTool> */}
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
                                            <input type="text" id='loginEmailId' {...register('email', {
                                                required: { value: true, message: 'Email is Required', },
                                                pattern: { value: emailRegex, message: 'Invalid Email' },
                                                // validate: {
                                                //     invalidEmail: () => {
                                                //         if (invalidCredentials === 400) {
                                                //             return 'Email not found'
                                                //         }
                                                //     }
                                                // }
                                            })} />
                                            <span>Email</span>
                                        </div>
                                        <div className="inputBx password">
                                            <input id="loginPasswordId" type={isPassword ? 'password' : 'text'} {...register('password', {
                                                required: { value: true, message: 'Password is Required', }
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
                                            (errors.email || errors.password) &&
                                            <p className='invalidInput formFieldAbsolute'>{errors?.email?.message || errors?.password?.message}</p>
                                        }
                                    </div>
                                    <div className="inputBx">
                                        <button className='signInButton' disabled={!isValid || !isDirty} >Login</button>
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
