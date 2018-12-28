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
      value: "Screen placeholder"
    };
  }


  buttonOnClick = e => {
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    return (
        <Container className="App">
          <Row>
            <Col xs="4">
              <Row>
                  <Calculator_Screen value={this.state.value}/>
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