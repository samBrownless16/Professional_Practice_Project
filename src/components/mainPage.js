import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

export class MainPage extends Component {
   
    render() { 
        return ( 
            <div className="mainPage" style={{ backgroundImage: "url(/mainPageBackground.jpg)" }} >
          
            <Card  className="textCard" bg='transparent' text='light' border='transparent' style={{ width: '18rem'}}>
            <h2>
                BUILD AND CREATE YOUR UTLIMATE PC
            </h2>
            </Card>
            <br />
            <br />
            <Card  className="textCard" bg='transparent' text='light' border='transparent' style={{ width: '18rem'}}>
           Don't forget your memory
           </Card>
        </div>
        );
    }
}