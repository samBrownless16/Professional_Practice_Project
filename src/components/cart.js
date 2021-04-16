import React from 'react';
import Card from 'react-bootstrap/Card';


export class Cart extends React.Component {
    state = {
      id: this.props.match.params.id,
      product: '',
      description: '',
      price: '',
      image: '',
      quantityAllowed: '',
      orderQuantity: ''
      };
      componentDidMount() {
       
        console.log(localStorage.getItem('amountOf'));
        var id = localStorage.getItem('price');
        var price = localStorage.getItem('price');
        var amountOf = localStorage.getItem('orderQuantity');
        if(amountOf == null)
        {
          amountOf=0;
        }
        
        console.log(price);
        console.log(amountOf);
        this.setState({ amountOf, price });
      }

      handleChange = (event) => {
        console.log(event.target);
        console.log(event.target.name);
        var input = event.target;
        var value = input.type === 'checkbox' ? input.checked : input.value;
    
        this.setState({ [input.name]: value });
      };
    
     

    render() {

        return (
            <div>
              <div>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                <img style={{ margin: 'auto',  width: '20%'}} src="msi_geforce_rtx_2060.jpg" alt="msi_geforce_rtx_2060 Image"></img>
              <label>
              <b>{this.state.amountOf} msi geforce rtx 2060</b>
              <br></br> 
               <br></br>
              Price:€{this.state.price}
              </label> 
                </Card>
                </div>
            </div> 
         
         
        );

    }
}