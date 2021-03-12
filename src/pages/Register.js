import React, { useState } from 'react';
import UserModel from '../models/user';
import { Col, Row, Form, Button } from "react-bootstrap";

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
        <div className="container">
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="name">
                    <Col>
                        <label htmlFor="name">Name</label>
                    </Col>
                    <Col sm={10}>
                        <input
                            className="inputForm"
                            onChange={handleName}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Col>
                        <label htmlFor="name">Email</label>
                    </Col>
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
                    <Col>
                        <label htmlFor="name">Password</label>
                    </Col>
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
                <Form.Group as={Row} controlId="password">
                    <Col>
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </Col>
                    <Col sm={10}>
                        <input
                            className="inputForm"
                            onChange={handleConfirmPassword}
                            value={confirmPassword}
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            required
                        />
                    </Col>
                </Form.Group>
                <Button variant="success" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Register;