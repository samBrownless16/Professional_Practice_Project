import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Cart } from './cart';
import { Login } from './login';
import { Store } from './store';
import { ProductPage } from './productPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart4 } from 'react-bootstrap-icons';

export class NavigationBar extends Component {
    handleSelect = (eventKey) => {
        if (eventKey === "Logout") {
            this.props.handleLogout();
        }
    }

    render() {
        return (
            <div className="NavigationBar">
                <BrowserRouter>
                    <Navbar className="d-flex align-items-center" bg="dark" variant="dark" sticky="top">
                        <Container>
                            <Navbar.Brand href="/">Navbar</Navbar.Brand>
                            <Nav className="NavLinks">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/cart">Cart</Nav.Link>
                                <Nav.Link href="/store">Store</Nav.Link>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav onSelect={this.handleSelect}>
                                    {this.displayUserOrGuest()}
                                    <Nav.Link href="/"><Cart4 color="white" size={24}></Cart4></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Switch>
                        <Route path="/cart" component={Cart} exact></Route>
                        <Route
                            path="/login"
                            render={() => (
                                <Login onLogin={this.props.handleLogin} username={this.props.username} />
                            )}>
                        </Route>
                        <Route path="/store" component={Store} exact></Route>
                        <Route path="/view_product/:id" component={ProductPage} exact></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

    displayUserOrGuest() {
        if (this.props.username != null) {
            return (
                <NavDropdown title={this.props.username}>
                    <NavDropdown.Item href="/">Your Orders</NavDropdown.Item>
                    <NavDropdown.Item href="/store" eventKey="Logout">Logout</NavDropdown.Item>
                </NavDropdown>
            );
        } else {
            return (
                <Link className="btn btn-outline-light" to="/login">Login</Link>
            );
        }
    }
}