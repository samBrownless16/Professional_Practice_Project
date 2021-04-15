import '../stylesheets/mainStyle.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class StoreDisplayProducts extends Component {
    render() {
        if (!this.props.productSearch || this.props.products.length > 0) {
            return this.props.products.map((product) => {
                return (
                    <div className="StoreDisplayProducts container-fluid col-lg-10" key={product.productID}>
                        <Card id="Card" bg="secondary" border="dark" text="white">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        {/* Pass down productInfo props */}
                                        <NavLink to={{ pathname: "/view_product/" + product.productID, productInfo: product }}>
                                            <Card.Img id="store_page_image" src={product.imageURL}></Card.Img>
                                        </NavLink>
                                    </Col>
                                    <Col>
                                        <NavLink to={{ pathname: "/view_product/" + product.productID, productInfo: product }}>
                                            <h3 className="storeProductName">{product.productName}</h3>
                                        </NavLink>
                                        <p className="storeText">{product.productDescription}</p>
                                        <p className="storeText">€{product.productPrice}</p>
                                        {/* <mark></mark> */}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <hr />
                    </div>
                );
            });
        } else {
            return (
                <div>
                    <h3>Sorry, No products match your search. Please try a different search.</h3>
                </div>
            );
        }
    }
}