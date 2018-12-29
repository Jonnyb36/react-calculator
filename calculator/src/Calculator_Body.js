import React from 'react';
import {Row, Col} from 'reactstrap';
import {Calculator_Button} from './Calculator_Button';

export const Calculator_Body = props => {
    //create a grid for all numbers
    return <>
            <Row noGutters>
                <Col sm="9">
                    <Row noGutters> 
                        <Col xs="4">
                            <Calculator_Button id="one" value="1" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="two" value="2" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="three" value="3" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Calculator_Button id="four" value="4" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="five" value="5" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="six" value="6" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Calculator_Button id="seven" value="7" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="eight" value="8" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="nine" value="9" onClick={props.onClick} />
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs="4">
                            <Calculator_Button id="zero" value="0" onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="decimal" value="." onClick={props.onClick} />
                        </Col>
                        <Col xs="4">
                            <Calculator_Button id="equals" value="=" onClick={props.onClick} />
                        </Col>
                    </Row>
                </Col>
                <Col sm="3">
                    <Calculator_Button id="add" value="+" onClick={props.onClick} />
                    <Calculator_Button id="subtract" value="-" onClick={props.onClick} />
                    <Calculator_Button id="multiply" value="*" onClick={props.onClick} />
                    <Calculator_Button id="divide" value="/" onClick={props.onClick} />
                    <Calculator_Button id="clear" value="ce" onClick={props.onClick} />
                </Col>
            </Row> 
        </>
}  
