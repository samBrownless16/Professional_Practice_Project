import React, { Component } from 'react';
import { CartDisplayProducts } from './cartDisplayProducts';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

export class Checkout extends Component {
    state = {
        cartProducts: [],
        totalPrice: 0
    }

    /* Need a DidUpdate here as cart page will not update if a search is performed while  
       already on the cart page i.e. the Cart component is already mounted */
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

    render() {
        return (
            <div className="Cart" style={{ width:'50%', margin: 'auto'}}>
                <card>
                    <label>Please enter your name: </label>
                    <br></br>
                    <input value='Frist name'></input>
                    <br></br>
                    <input value='Surname name'></input>
                    <br></br>
                </card>
                <br></br>
                <card>
                <br></br>
                <label>Please enter the location of where you want the package delivery: </label>
                    <br></br>
                    <input value='Adress'></input>
                    <br></br>
                    <input value='Surname name'></input>
                    <br></br>
                </card>
                <card>
                Total price €{this.state.totalPrice}
                </card>
                <br></br>
                <Button class="btn">Purchase Items</Button>
            </div>
        );
    }
}