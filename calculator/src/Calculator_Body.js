import React from 'react';
import {Row, Col} from 'reactstrap';
import {Calculator_Button} from './Calculator_Button';

export const Calculator_Body = props => {
    //create a grid for all numbers
    return <>
            <Row>
                <Col xs="9">
                    <Col>
                        <Calculator_Button value="1" onClick={props.onClick} />
                        <Calculator_Button value="2" onClick={props.onClick} />
                        <Calculator_Button value="3" onClick={props.onClick} />
                    </Col>
                    <Col>
                        <Calculator_Button value="4" onClick={props.onClick} />
                        <Calculator_Button value="5" onClick={props.onClick} />
                        <Calculator_Button value="6" onClick={props.onClick} />
                    </Col>
                    <Col>
                        <Calculator_Button value="7" onClick={props.onClick} />
                        <Calculator_Button value="8" onClick={props.onClick} />
                        <Calculator_Button value="9" onClick={props.onClick} />
                    </Col>
                    <Col>
                        <Calculator_Button value="0" onClick={props.onClick} />
                    </Col>
                </Col>
                <Col xs="3">
                    <Col>
                        <Calculator_Button value="*" onClick={props.onClick} />
                        <Calculator_Button value="+" onClick={props.onClick} />
                        <Calculator_Button value="/" onClick={props.onClick} />
                    </Col>
                </Col>
            </Row> 
        </>
    
}  
