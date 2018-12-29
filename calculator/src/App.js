import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
//import logo from './logo.svg';
import './App.css';
import {Calculator_Screen} from './Calculator_Screen';
import {Calculator_Body} from './Calculator_Body';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      screenValue: 0,
      calcValue: null,
      action: null
    };
  }

  buttonOnClick = e => {
    const numRegex = /\d/;
    const checkNumber = numRegex.test(e.target.value);//true for numbers
    
    let newValue;
    if(checkNumber) {
      if (!this.state.action) {
        newValue = e.target.value;
      }
      else {
        newValue = String(this.state.screenValue) + this.state.action + String(e.target.value);
      }
      this.setState({
        screenValue: e.target.value,
        calcValue: eval(newValue)
      });
    } else if (e.target.value === "=") {
      this.setState({
        screenValue: this.state.calcValue
      });
    } else if (e.target.value === "ce") {
      this.setState({
        screenValue: this.state.calcValue
      });
    } else {
      this.setState({
        action: e.target.value
      });
    }
  }
  
  render() {
    return (
        <Container className="App">
          <Row>
            <Col xs="4">
              <Row>
                  <Calculator_Screen value={this.state.screenValue}/>
              </Row>
              <Row>
                  <Calculator_Body onClick={this.buttonOnClick}/>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}