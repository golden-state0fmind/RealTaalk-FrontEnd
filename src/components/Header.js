import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Header = (props) => {

    return (
        <header className="header">
            <div>
                <Card className="card">
                    <img />
                    <CardBody className="card-body">
                        <CardTitle tag="h5"><Link to={'/'}>Home</Link></CardTitle>
                        <label className='links'>
                            <ul>
                                {props.currentUser ?
                                    <>
                                        <li><Link to={'/profile'}></Link></li>
                                        <li><a href='/logout' onClick={props.logout}>Log Out</a></li>
                                    </>
                                    :
                                    <>
                                        <Button outline color="success"><Link to={'/register'}>Register</Link></Button>{' '}
                                        <li><Link to={'/login'}>Login</Link></li>
                                    </>
                                }
                            </ul>
                        </label>
                    </CardBody>
                </Card>
            </div>
        </header>
    );
}
export default Header;