import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <div>
                <Link to={'/'}>Home!</Link>
            </div>
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
        </header>
    );
}
export default Header;