import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export class Store extends React.Component {
    state = {
        amountOf: null,
        autoSub: false
      };

      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => {
        const { amountOf, autoSub } = this.state;
  localStorage.setItem('autoSub', autoSub);
  localStorage.setItem('amountOf', autoSub ? amountOf : null);
      };

      componentDidMount() {
        const autoSub = localStorage.getItem('autoSub') === 'true';
        const amountOf = autoSub ? localStorage.getItem('amountOf') : null;
        this.setState({ amountOf, autoSub });
      }

    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            Amount Of Items bought
          <input type='number' min="0" max="6"
                            className='form-control'
                            value={this.state.NumbersOfPeople}>
                          </input>  
                        
            <label>
              <input name="autoSub" checked={this.state.autoSub} onChange={this.handleChange} type="checkbox"/> Auto Subscirbe
            </label>
            <button type="submit">Add to cart</button>
          </form>
        );
      }
}