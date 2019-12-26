import React, { Component } from 'react';
import GenerateNewName from './GenerateNewName';
import { Container, Row, Col } from 'react-bootstrap';
import { appName, appDescription } from './Utils';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="appName">
            {appName}
          </Col>
        </Row>
        <Row>
          <Col className="appDescription">
            {appDescription}
          </Col>
        </Row>
        <GenerateNewName />
      </Container>
    );
  }
}

export default App;
