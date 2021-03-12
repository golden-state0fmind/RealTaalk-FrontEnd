import React from 'react';
import { Link } from 'react-router-dom';
import { Button, NavLink, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = (props) => {

    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href='/'>Welcome to RealTaalk</Navbar.Brand>
                <Nav justify variant="tabs">
                    <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                    {props.currentUser ?
                        <>
                            <Nav.Link><Link to={'/profile'}></Link></Nav.Link>
                            <Button variant="danger" href='/logout' onClick={props.logout}>Log Out</Button>
                        </>
                        :
                        <>
                            <Nav.Link><Link to={'/register'}>Register</Link></Nav.Link>
                            <Nav.Link><Link to={'/login'}>Login</Link></Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar>
        </>
    );
}
export default Header;