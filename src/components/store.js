import React, { Component } from 'react';
import axios from 'axios';
import { StoreDisplayProducts } from './storeDisplayProducts';
const port = 4000;

export class Store extends Component {
    state = { 
        storeProducts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:${port}/allproducts`)
        .then(response => {
            this.setState({storeProducts: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() { 
        return ( 
            <div className="Store">
                <StoreDisplayProducts products={this.state.storeProducts}></StoreDisplayProducts>
            </div>
        );
    }
}