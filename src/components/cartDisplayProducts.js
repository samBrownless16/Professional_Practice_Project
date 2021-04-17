import '../stylesheets/mainStyle.css';
import React, { Component, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class CartDisplayProducts extends Component {
    constructor() {
        super();
        this.DeleteCartProduct = this.DeleteCartProduct.bind(this);
        this.state = { name: "React Component reload sample" };
    }
   

    DeleteCartProduct(product) {
        var index = this.props.products.indexOf(product);
        if (index !== -1) {
            this.props.products.splice(index, 1);
            console.log(this.props.products)
            localStorage.setItem('cart', JSON.stringify(this.props.products));
            this.setState({ name: "React Component Updated - " + new Date() });
        }
       

    }


    render() {
        return this.props.products.map((product) => {
            return (
                <div className="StoreDisplayProducts container-fluid col-lg-10" key={product.productID}>
                    <Card id="Card" bg="secondary" border="dark" text="white" style={{ width: '20rem', margin: 'auto' }}>

                        <p className="storeText">{product.product}</p>
                        <p className="storeText">{product.orderQuantity} for €{product.price} each at a total of €{product.lineItemPrice}</p>
                        <Button type="submit" id="empty-cart" variant="danger" class="btn" onClick={() => this.DeleteCartProduct(product)} >
                            Delete form cart</Button>



                    </Card>
                    <br></br>
                </div>

            );
        });

    }
}