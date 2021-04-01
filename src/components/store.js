import React from 'react';
import Card from 'react-bootstrap/Card';
export class Store extends React.Component {
  constructor() {
    super();
    this. state = {
    amountOf: 0,
    autoSub: false
  };
  this.handleChange = this.handleChange.bind(this);
}

  handleChange = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    var input = event.target;
    var value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    var { amountOf, autoSub } = this.state;
    localStorage.setItem('autoSub', autoSub);
    localStorage.setItem('amountOf', amountOf ? amountOf : 0);
  };

  componentDidMount() {

    var autoSub = localStorage.getItem('autoSub') === 'true';
    var amountOf = localStorage.getItem('amountOf')
    if(amountOf == null)
    {
      amountOf=0;
    }
    

    this.setState({ amountOf, autoSub });
  }

  render() {
    return (
  
        <Card style={{ width: '75%', margin: 'auto' }}>
           <img style={{ margin: 'auto',  width: '75%'}} src="msi_geforce_rtx_2060.jpg" alt="msi_geforce_rtx_2060 Image"></img>
        <div className="form-group">
        <label><b>Core/Memory</b> - 
Boost Clock / Memory Speed, 
1695 MHz / 14 Gbps, 
8GB GDDR6, 
DisplayPort x 3(v1.4a), 
HDMI x 1(Supports 4K@60Hz as specified in HDMI 2.0b), 
Twin Frozr 7 Thermal Design
<br></br>
<b>TORX Fan 3.0</b> - Dispersion fan blade: Steep curved blade accelerating the airflow., 
 Traditional fan blade: Provides steady airflow to massive heat sink below., 
Mastery of Aerodynamics: The heatsink is optimized for efficient heat dissipation, keeping your temperatures low and performance high., 
Zero Frozr technology: Stopping the fan in low-load situations, keeping a noise-free environment.
<br></br>

<b>Dragon Center</b> - 

A consolidated platform that offers all software including MYSTIC LIGHT functionality for your MSI Gaming product. </label>
          <label>
          <label>How many:(6 max) </label>
          <input name='amountOf' type='number' min="-1" max="6"
            value={this.state.amountOf}
            onChange={this.handleChange}>
          </input>
            
            <input name="autoSub" checked={this.state.autoSub} onChange={this.handleChange} type="checkbox" /> Speedy delivery
            </label> 
          <button type="submit" onClick={this.handleFormSubmit}>Add to cart</button>
        </div>
        </Card>
   
    );
  }
}