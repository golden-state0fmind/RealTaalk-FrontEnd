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
    }
}