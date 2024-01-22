import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// we are using bootstrap navbar
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand style={{fontWeight : 800  }}><h1  >Data Virtualization Dashboard</h1></Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header