import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import { Col, Row, Form, Button } from "react-bootstrap";
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
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="email">
                    <label htmlFor="name">Email</label>
                    <Col sm={10}>
                        <input
                            onChange={handleEmail}
                            value={email}
                            type="email"
                            id='email'
                            name='email'
                            required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="password">
                    <label htmlFor="name">Password</label>
                    <Col sm={10}>
                        <input
                            className="inputForm"
                            onChange={handlePassword}
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    </Col>
                </Form.Group>
                <Button className="regbtn" type="submit">Login</Button>
            </Form>
        </div>
    )
}
export default Login