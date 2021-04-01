import React from 'react';
import Card from 'react-bootstrap/Card';


export class Cart extends React.Component {
    state = {
        amountOf: 0,
        autoSub: false
      };
      componentDidMount() {
        console.log(localStorage.getItem('autoSub'));
        console.log(localStorage.getItem('amountOf'));
        var autoSub = localStorage.getItem('autoSub') === 'true';
        var amountOf = localStorage.getItem('amountOf')
        if(amountOf == null)
        {
          amountOf=0;
        }
        
        console.log(localStorage.getItem('autoSub'));
        console.log(amountOf);
        this.setState({ amountOf, autoSub });
      }
     

    render() {

        return (
            <div>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                <img style={{ margin: 'auto',  width: '75%'}} src="msi_geforce_rtx_2060.jpg" alt="msi_geforce_rtx_2060 Image"></img>
              <label>
              <b>{this.state.amountOf} msi geforce rtx 2060</b>
              <br></br> 
              Speedy delivery
              </label> 
                </Card>
            </div>
        );

    }
}