import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
//import logo from './logo.svg';
import './App.css';
import {Calculator_Screen} from './Calculator_Screen';
import {Calculator_Body} from './Calculator_Body';

const dps = 8;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      screenValue: 0,
      calcString: "",
      action: null,
      numberSelectedLast: false
    };
  }

  buttonOnClick = e => {
    const numRegex = /\d|\./;
    let numberSelected = numRegex.test(e.target.value);//true for numbers and "."
    if(/\./.test(this.state.screenValue) & e.target.value === "."){numberSelected = false} //override number selected if . already selected

    let newValue, calcString;
    if(numberSelected) {
      if (!this.state.numberSelectedLast){
        newValue = (e.target.value === ".") ? "0." : e.target.value; //deal with selecting . first
        if(this.state.action){
          calcString = this.state.calcString + this.state.action;
          this.setState({
            calcString: calcString
          });
        }  
      } else {
        newValue = String(this.state.screenValue) + String(e.target.value);
      }
      this.setState({
        numberSelectedLast: true,
        screenValue: newValue
      });

    } else if (e.target.value === "=") {
      const calcValue = parseFloat(eval(this.state.calcString + this.state.screenValue).toFixed(dps));
      this.setState({
        numberSelectedLast: false,
        screenValue: calcValue,
        calcString: String(calcValue),
        action: null
      });

    } else if (e.target.id === "clear") {
      this.setState({
        numberSelectedLast: false,
        screenValue: 0,
        calcString: "",
        action: null
      });
      
    } else {
      const numberSelectedLast = this.state.numberSelectedLast;
      newValue = numberSelectedLast? parseFloat(eval(this.state.calcString + String(this.state.screenValue)).toFixed(dps)): this.state.screenValue;
      this.setState({
        numberSelectedLast: false,
        action: e.target.value,
        screenValue: newValue,
        calcString: newValue
      });
    }
  }
  
  render() {
    return (
        <Container className="App">
              <Row style={{height:30}}/>
              <Row>
                <Col md={{ size: 4, offset: 4 }}>
                  <Calculator_Screen id="display" value={this.state.screenValue}/>
                </Col>
              </Row>
              <Row>
                <Col md={{ size: 4, offset: 4 }}>
                  <Calculator_Body onClick={this.buttonOnClick}/>
                </Col>
              </Row>
        </Container>
    );
  }
}