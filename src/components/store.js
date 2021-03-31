import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Store extends React.Component {
    state = {
        user: '',
        autoSub: false
      };

      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => {
        const { user, autoSub } = this.state;
  localStorage.setItem('autoSub', autoSub);
  localStorage.setItem('user', autoSub ? user : '');
      };

      componentDidMount() {
        const autoSub = localStorage.getItem('autoSub') === 'true';
        const user = autoSub ? localStorage.getItem('user') : '';
        this.setState({ user, autoSub });
      }

    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            <label>
              User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
            </label>
            <label>
              <input name="autoSub" checked={this.state.autoSub} onChange={this.handleChange} type="checkbox"/> Auto Subscirbe
            </label>
            <button type="submit">Sign In</button>
          </form>
        );
      }
}