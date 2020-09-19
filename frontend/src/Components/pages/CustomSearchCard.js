import React from 'react';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import './CustomSearchCard.css';

function CustomSearchCard({title, date, description}) {
    return (
      <div className="box">
        <Form>
          <Row>
            <Col>If</Col>
            <Col>
              <div className="dropdownBox">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Name of Field
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Operator</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Form.Control placeholder="Value" />
            </Col>
          </Row>
        </Form>
      </div>
    );
}

export default CustomSearchCard;
