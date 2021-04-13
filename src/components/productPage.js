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
    }
    state = {
        id: this.props.match.params.id,
        product: '',
        description: '',
        price: '',
        image: '',
        orderQuantity: 1
    }

    componentDidMount() {
        this.setState({
            product: this.props.location.productInfo.productName,
            description: this.props.location.productInfo.productDescription,
            price: this.props.location.productInfo.productPrice,
            image: this.props.location.productInfo.imageURL
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
                        <h4 className="greenText">In Stock</h4>
                    </Col>
                    <Col>
                        <Form inline>
                            <Form.Label style={{marginRight: "1em"}}><h4>Quantity:</h4></Form.Label>
                            <Form.Control as="select" onChange={this.onChangeOrderQuantity}>
                                {Array.from({ length: maxOrder }).map((_, num) => (
                                    <option key={num}>{num + 1}</option>
                                ))}
                            </Form.Control>
                        </Form>
                    </Col>
                    <Col>
                        <h4>€{(this.state.orderQuantity * this.state.price).toFixed(2)}</h4>
                    </Col>
                    <Col>
                        <Button className="cartButton">Add to Cart</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    // #region onChange Events
    onChangeOrderQuantity(e) { this.setState({ orderQuantity: e.target.value }); }
    // #endregion
}