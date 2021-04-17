import '../stylesheets/mainStyle.css';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const maxOrder = 5;

export class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeOrderQuantity = this.onChangeOrderQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }
    
    state = {
        id: this.props.match.params.id,
        product: '',
        description: '',
        price: '',
        image: '',
        quantityAllowed: '',
        orderQuantity: ''
    }

    componentDidMount() {
        this.setState({
            product: this.props.location.productInfo.productName,
            description: this.props.location.productInfo.productDescription,
            price: this.props.location.productInfo.productPrice,
            image: this.props.location.productInfo.imageURL,
            quantityAllowed: (this.props.location.productInfo.productStockAmount > 4) ? maxOrder : this.props.location.productInfo.productStockAmount,
            orderQuantity: (this.props.location.productInfo.productStockAmount > 0) ? 1 : 0
        });
    }

    render() {
        return (
            <div className="productPage container-fluid col-lg-10">
                <Row className="topMargin">
                    <Col>
                        <Image className="productImage" fluid src={this.state.image} />
                    </Col>
                </Row>
                <Row className="margin">
                    <Col className="productInfoBox">
                        <h2>{this.state.product}</h2><hr />
                        <h4>Price: €{this.state.price}</h4><hr />
                        <p>{this.state.description}</p>
                    </Col>
                </Row>
                <Row className="bottomMargin">
                    <Col>
                        {this.stockAmountText()}
                    </Col>
                    <Col>
                        <Form inline>
                            <Form.Label style={{ marginRight: "1em" }}><h4>Quantity:</h4></Form.Label>
                            {this.quantityDropdown()}
                        </Form>
                    </Col>
                    <Col>
                        <h4>€{(this.state.orderQuantity * this.state.price).toFixed(2)}</h4>
                    </Col>
                    <Col>
                        <Button className="cartButton" disabled={this.state.quantityAllowed < 1} onClick={this.addToCart}>Add to Cart</Button>
                    </Col>
                </Row>
            </div>
        );
    }
    
    stockAmountText() {
        if (this.state.quantityAllowed === 0) {
            return(<h4 className="redText">Out of Stock</h4>);
        } else if (this.state.quantityAllowed < 5) {
            return(<h4 className="greenText">Only {this.state.quantityAllowed} left!</h4>);
        } else {
            return(<h4 className="greenText">In Stock</h4>);
        }
    }

    quantityDropdown() {
        if (this.state.quantityAllowed > 0) {
            return (
                <Form.Control as="select" onChange={this.onChangeOrderQuantity}>
                    {Array.from({ length: this.state.quantityAllowed }).map((_, num) => (
                        <option key={num}>{num + 1}</option>
                    ))}
                </Form.Control>
            );
        } else {
            return (
                <Form.Control as="select" disabled>
                    <option>0</option>
                </Form.Control>
            );
        }
    }

    addToCart(){
        var cartLine = {
            id: this.props.match.params.id,
            product: this.state.product,       
            price: this.state.price,           
            orderQuantity: this.state.orderQuantity,
            lineItemPrice: this.state.price*this.state.orderQuantity
        };
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (cart == null)
        {
            cart = [];
        }

        cart.push(cartLine);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log( localStorage.getItem('cart'));
    }

    

    // #region onChange Events
    onChangeOrderQuantity(e) { this.setState({ orderQuantity: e.target.value }); }
    // #endregion
}