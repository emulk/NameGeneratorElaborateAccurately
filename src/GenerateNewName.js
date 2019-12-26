import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { NewNameGenerator } from './NameGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GenerateNewNameStyle.css';


class GenerateNewName extends Component {
    constructor(props) {
        super(props);
        let interval;
        this.state = {
            name: '',
            finalName: '',
            index: 0
        };

        this.handleGetNewInterval = this.handleGetNewInterval.bind(this);
        this.handleInterval = this.handleInterval.bind(this);
    }

    componentDidMount() {
        this.handleGetNewInterval();
    }

    handleGetNewInterval() {
        let name = NewNameGenerator();
        this.setState({
            name: '',
            finalName: name,
            index: 0
        });
        clearInterval(this.interval);
        this.interval = setInterval(this.handleInterval, 100);
    }

    handleInterval() {
        this.setState({
            name: this.state.name + this.state.finalName[this.state.index],
            index: this.state.index + 1
        });
        if (this.state.index >= this.state.finalName.length) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <Row className="generateRow">
                <Col>
                    <div className="projectName">{this.state.name}</div>
                </Col>
                <Col className="colAlignment">
                    <Button className="buttonGenerate" variant="outline-primary" onClick={this.handleGetNewInterval}>Generate Name</Button>
                </Col>
            </Row>
        );
    }
}

export default GenerateNewName;