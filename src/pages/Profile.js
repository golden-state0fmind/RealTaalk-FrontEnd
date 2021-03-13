import React, { useState, useEffect } from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import io from 'socket.io-client';
// backend server endpoint for the socket
// socket is long pulling and wont disconnect
// still need to send message back and forth to server side
// cors proving to be a challenge sometimes
// look into listening to emits on the port
const socket = io('http://localhost:3000')

const Profile = props => {
    const [state, setState] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])
    // handles promise for hooks
    useEffect((chat) => {
        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    }, [state])

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    // Needed for socket.io rendering
    const onMessageSubmit = e => {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setState({ message: '', name })
    }
    // Maps over chat andf displays for a chat log in the profile
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
            <h1>User ID number: {props.currentUser}</h1>
            <Form onSubmit={onMessageSubmit} className="container">
                <h1>Messenger</h1>
                <Form.Group as={Row} controlId="">
                    <Col sm={10}>
                        <label >Name</label>
                        <Form.Control
                            name="name"
                            onChange={e => onTextChange(e)}
                            value={state.name}
                            label="Name"
                        />
                    </Col>
                    <Form.Group>
                        <Col sm={10}>
                            <label>Message</label>
                            <Form.Control as="textarea" rows={3}
                                label="Message"
                                name="message"
                                onChange={e => onTextChange(e)}
                                value={state.message}
                            />
                        </Col>
                    </Form.Group>
                </Form.Group>
                <Button
                    variant="success"
                    type="submit">
                    Send Message</Button>
            </Form>
            <div>
                <h1>Chat Log</h1>
                {renderChat()}
            </div>
        </>
    )
}
export default Profile 