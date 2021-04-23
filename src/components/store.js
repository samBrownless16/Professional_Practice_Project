import React, { Component } from 'react';
import axios from 'axios';
import { StoreDisplayProducts } from './storeDisplayProducts';
const port = 4000;

export class Store extends Component {
    state = { storeProducts: [], productSearch: false }

    componentDidMount() {
        // Check if a search has been performed (by checking if the param search is undefined or not)
        axios.get(`http://localhost:${port}/allproducts`)
        .then(response => {
            this.setState({storeProducts: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Update store page if a search is performed (Update the already mounted component)
    componentDidUpdate() {
        if (this.props.match.params.search !== undefined) {
            axios.get(`http://localhost:${port}/product_search/` + this.props.match.params.search)
            .then(response => {
                this.setState({storeProducts: response.data, productSearch: true});
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    render() { 
        return ( 
            <div className="Store">
                <StoreDisplayProducts 
                    products={this.state.storeProducts} 
                    productSearch={this.state.productSearch}>       
                </StoreDisplayProducts>
            </div>
        );
    }
}