import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class Checkout extends Component {
    state = {
        cartProducts: [],
        totalPrice: 0
    }

    
    componentDidMount() {
        var cart = JSON.parse(localStorage.getItem('cart'));

        if (cart == null) {
            cart = [];
        }
        var localTotalPrice = 0;

        for (const [index, value] of cart.entries()) {
            console.log(value);
            localTotalPrice += value.lineItemPrice;
        }
        this.setState({ cartProducts: cart, totalPrice: localTotalPrice });
        //   console.log(localStorage.getItem('cart'));
    }

    onPurchase = () => {
        alert('Thank you for your purchase')
    }

    render() {
        return (
          
            <div style={{ width:'50%', margin: 'auto'}}>
                <Form >           
                <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>First name</Form.Label>
                                    <Form.Control type="input" value={this.state.firstName} onChange={this.onChangeFName} required></Form.Control>
                                                 </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label>Surname</Form.Label>
                                    <Form.Control type="input" value={this.state.surname} onChange={this.onChangeSurname} required></Form.Control>
                                </Form.Group>
                            </Form.Row>

                                <Form.Group as={Col}>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="input" placeholder='Eircode' onChange={this.onChangeEmail} required></Form.Control>
                                    <br></br>
                                    <Form.Control type="input" placeholder='Address' onChange={this.onChangePassword} required></Form.Control>
                                    <br></br>
                                    <Form.Control type="input" placeholder='City' onChange={this.onChangePassword} required></Form.Control>
                                    <br></br>
                                    <Form.Control type="input" placeholder='Country' onChange={this.onChangePassword} required></Form.Control>
                                </Form.Group>                              
                                <Card bg="secondary" border="dark" text="white" style={{ width:'30%', margin: 'auto'}} >
                                     Total price for all items: €{this.state.totalPrice}
                                 </Card>
                                 <br></br>     
                                 <Button class="btn" href="/cart" style={{ width:'15%', margin: 'auto'}} >Go back to Checkout</Button>
                                 &nbsp;&nbsp;&nbsp;
                                  <Button class="btn" onClick={() => this.onPurchase()} href="/" style={{ width:'15%', margin: 'auto'}} >Purchase items</Button>                                                    
                        </Form>
            </div>

        );
    }
}
