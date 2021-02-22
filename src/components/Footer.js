import React from 'react';
import { Container } from 'reactstrap'
// builds footer just need to insert info
const Footer = (props) => {
    return (
        <>
            <Container
                className="themed-container footer"
                fluid={true}
            >RealTaalk &copy; RealTaalk</Container>
        </>
    )
}

export default Footer;