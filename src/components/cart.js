import React from 'react';
import Card from 'react-bootstrap/Card';


export class Cart extends React.Component {
    state = {
        user: '',
        autoSub: false
      };
    componentDidMount() {
        const autoSub = localStorage.getItem('autoSub') === 'true';
        const user = autoSub ? localStorage.getItem('user') : '';
        this.setState({ user, autoSub });
      }
    render() {

        return (
            <div>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                
                {this.state.user}
                </Card>
            </div>
        );

    }
}