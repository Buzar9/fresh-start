import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Book Shop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Add Book</Nav.Link>
                    <Nav.Link href="#">Book List </Nav.Link>
                </Nav>
            </Navbar>
        );
    }

}

export default NavigationBar;
