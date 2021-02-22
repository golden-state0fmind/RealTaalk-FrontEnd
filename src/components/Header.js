import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Header = (props) => {

    return (
        <header className="header">
            <div>
                <Card>
                    <img />
                    <CardBody>
                        <CardTitle tag="h5"><Link to={'/'}>Home</Link></CardTitle>
                        <div className='links'>
                            <ul>
                                {props.currentUser ?
                                    <>
                                        <li><Link to={'/profile'}></Link></li>
                                        <li><a href='/logout' onClick={props.logout}>Log Out</a></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to={'/register'}>Register</Link></li>
                                        <li><Link to={'/login'}>Login</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </header>
    );
}
export default Header;