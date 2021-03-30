import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import { Cart4 } from 'react-bootstrap-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

class NavigationBar extends Component {
    state = {}
    render() {
        return (
            <div className="NavigationBar">
                <BrowserRouter>
                    <Navbar className="d-flex align-items-center" bg="dark" variant="dark" sticky="top">
                        <Container>
                            <Navbar.Brand href="/">Navbar</Navbar.Brand>
                            <Nav className="NavLinks ">
                                <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/cart">Page_One</Nav.Link> 
                                <Nav.Link href="/">Page_Two</Nav.Link>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav>
                                    {this.displayUserOrGuest()}
                                    <Nav.Link href="/"><Cart4 color="white" size={24}></Cart4></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route path="/"></Route>
                        <Route path="/cart"></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

    displayUserOrGuest() {
        if (this.props.loggedIn) {
            return (
                <NavDropdown title="UserName">
                    <NavDropdown.Item href="/">Your Orders</NavDropdown.Item>
                    <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                </NavDropdown>
            )
        } else {
            return (
                <Button variant="outline-light">Login</Button>
            );
        }
    }
}

export default NavigationBar;