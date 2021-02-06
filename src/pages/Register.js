import React, { useState } from 'react';
import UserModel from '../models/user';

const Register = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [consfirmPassword, setConfirmPassword] = useState('');
}

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
    if (password === consfirmPassword) {
        //space for the usermodel helper function that comes with the model
    }
}