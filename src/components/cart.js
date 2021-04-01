import React from 'react';
import Card from 'react-bootstrap/Card';


export class Cart extends React.Component {
    state = {
        amountOf: null,
        autoSub: false
      };
    componentDidMount() {
        const autoSub = localStorage.getItem('autoSub') === 'true';
        var amountOf = autoSub ? localStorage.getItem('amountOf') : null;
        this.setState({ amountOf, autoSub });
      }
     

    render() {

        return (
            <div>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                
                {this.state.amountOf}
                </Card>
            </div>
        );

    }
}