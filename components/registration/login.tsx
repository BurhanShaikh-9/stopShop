
"use client"
import AuthService from '@/services/authService'
import React, { useState } from 'react'

export const LoginComponent = () => {
    const { LoginApi } = AuthService()

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
                console.log(res, 'response');
            })
            .catch((err) => {
                console.log(err, 'error');
            })
    }



    return (
        <React.Fragment>
            {/* <form className="LoginMain" onSubmit={onFormSubmit}>
                <input type="text" name='email' onChange={onChangeInput} />
                <input type="text" name='password' onChange={onChangeInput} />
                <button type="submit" > Login </button>
            </form> */}


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
                            <h2>LOGIN</h2>
                            <form onSubmit={onFormSubmit}>
                                <div className="inputBx">
                                    <input type="text" required onChange={onChangeInput}/>
                                    <span>Login</span>
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="inputBx password">
                                    <input id="password-input" type="password" name="password" required onChange={onChangeInput} />
                                    <span>Password</span>
                                    <a href="#" className="password-control" ></a>
                                    <i className="fas fa-key"></i>
                                </div>
                                <label className="remember"><input type="checkbox" />
                                    Remember</label>
                                <div className="inputBx">
                                    <button className='signInButton' type='submit'>Login</button>
                                    {/* <input type="submit" value="Log in" disabled /> */}
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
