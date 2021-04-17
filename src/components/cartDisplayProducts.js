import '../stylesheets/mainStyle.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class CartDisplayProducts extends Component {
    render() {
       console.log(this.props)
            return this.props.products.map((product) => {
                return (
                    <div className="StoreDisplayProducts container-fluid col-lg-10" key={product.productID}>
                        <Card id="Card" bg="secondary" border="dark" text="white">
                            <Card.Body>
                                <Row>
                                   
                                    <Col>
                                    <p className="storeText">{product.product}</p>                                     
                                     <p className="storeText">{product.orderQuantity} for €{product.price} each at a total of €{product.lineItemPrice}</p>
                                     <Button type="submit" name="delete" id="empty-cart" variant="danger" class="btn" value="Empty Cart" >Delete form cart</Button>
                                    
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <hr />
                    </div>
                );
            });
        
    }
}