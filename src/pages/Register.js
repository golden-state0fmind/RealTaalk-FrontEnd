import React, { useState } from 'react';
import UserModel from '../models/user';

const Register = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (password === confirmPassword) {
            //space for the usermodel helper function that comes with the model
            UserModel.create({ name, email, password })
                .then(data => {
                    console.log('Successful Login', data)
                    props.history.push('/login')
                })
        }
    }
    return (
        <div>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleName}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="name">Email</label>
                    <input
                        onSubmit={handleEmail}
                        value={email}
                        type="email"
                        id='email'
                        name='email'
                        required />
                </div>
                <div className='form-group'>
                    <label htmlFor="name">Password</label>
                    <input
                        onChange={handlePassword}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        onChange={handleConfirmPassword}
                        value={confirmPassword}
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;