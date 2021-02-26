import React, { useState, useEffect } from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";
import io from 'socket.io-client'

const socket = io.connect("http://localhost:4000")

const Profile = props => {
    const [state, setState] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    }, [state])

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = e => {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setState({ message: '', name })
    }

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ))
    }

    return (
        <>
            <h1>Profile of user with ID{props.currentUser}</h1>
            <Form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control
                        name="name"
                        onChange={e => onTextChange(e)}
                        value={state.name}
                        label="Name"
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        name="message"
                        onChange={e => onTextChange(e)}
                        value={state.message}
                        label="Message"
                    />
                </Form.Group>
                <Button>Send Message</Button>
            </Form>
            <div>
                <h1>Chat Log</h1>
                {renderChat()}
            </div>
        </>
    )
}
export default Profile 