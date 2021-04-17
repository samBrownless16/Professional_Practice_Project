import React, { Component } from 'react';
import { CartDisplayProducts } from './cartDisplayProducts';
import Button from 'react-bootstrap/Button';

export class Cart extends Component {
    state = { cartProducts: []}

    /* Need a DidUpdate here as cart page will not update if a search is performed while  
       already on the cart page i.e. the Cart component is already mounted */
       componentDidMount() {
      var cart = JSON.parse(localStorage.getItem('cart'));
      this.setState ({cartProducts : cart });
      if (cart == null) {
        cart = [];
   }
    //   console.log(localStorage.getItem('cart'));
    }

    render() { 
        return ( 
            <div className="Cart">
                <CartDisplayProducts 
                    products={this.state.cartProducts}>       
                </CartDisplayProducts>
                <Button class="btn">Go To Checkout</Button>
            </div>
        );
    }
}