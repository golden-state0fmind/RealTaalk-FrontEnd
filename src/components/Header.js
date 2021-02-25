import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Card, CardBody, CardTitle
} from 'reactstrap';
const Header = (props) => {
    const [state, setState] = useState()

    return (
        <header className="header">
            <div>
                <Card className="card">
                    <CardBody className="card-body">
                        <CardTitle tag="h5"></CardTitle>
                        <Button className="regbtn"><Link to={'/'}>Home</Link></Button>
                        <label className='links'>
                            {props.currentUser ?
                                <>
                                    <Link to={'/profile'}></Link>
                                    <Button className="regbtn" href='/logout' onClick={props.logout}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Button className="regbtn"><Link to={'/register'}>Register</Link></Button>{' '}
                                    <Button className="regbtn"><Link to={'/login'}>Login</Link></Button>
                                </>
                            }
                        </label>
                    </CardBody>
                </Card>
            </div>
        </header>
    );
}
export default Header;