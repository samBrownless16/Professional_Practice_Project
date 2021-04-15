import React, { Component } from 'react';
import axios from 'axios';
import { StoreDisplayProducts } from './storeDisplayProducts';
const port = 4000;

export class Store extends Component {
    state = { storeProducts: [], productSearch: false }

    /* Need a DidUpdate here as store page will not update if a search is performed while  
       already on the store page i.e. the Store component is already mounted */
    componentDidUpdate() {
        // Check if a search has been performed (by checking if the param search is undefined or not)
        if (this.props.match.params.search === undefined) {
            axios.get(`http://localhost:${port}/allproducts`)
            .then(response => {
                this.setState({storeProducts: response.data});
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            // search param found so call server to find items matching the search
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