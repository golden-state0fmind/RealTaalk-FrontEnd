import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'

const Login = props => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let handleEmail = e => {
        setEmail(e.target.value)
    }
    let handlePassword = e => {
        setPassword(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        //space for the useModel that comes with the database
        UserModel.login({
            email,
            password
        }).then(data => {
            if (!data.user) {
                console.log('Login Unsuccessful')
                return false
            }
            // storeUser is defined in the app component and passed to Login
            props.storeUser(data.user)
        })
            .catch(err => console.log('login error', err))
    }
    //if user is logged in, redirect
    if (props.currentUser) return <Redirect to='/profile' />

    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Email</label>
                    <input
                        onChange={handleEmail}
                        value={email}
                        type="email"
                        id='email'
                        name="email"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handlePassword}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login