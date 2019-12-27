import React, { Component } from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
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
            index: 0,
            history: []
        };

        this.handleGetNewInterval = this.handleGetNewInterval.bind(this);
        this.handleInterval = this.handleInterval.bind(this);
    }

    componentDidMount() {
        this.handleGetNewInterval();
    }

    handleGetNewInterval() {
        let name = NewNameGenerator();
        let oldName = this.state.finalName;
        let oldHistory = this.state.history;
        if (oldName.length > 0) {
            oldHistory.unshift(oldName);
        }

        this.setState({
            name: '',
            finalName: name,
            index: 0,
            history: oldHistory
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
            <span>
                <Row className="generateRow">
                    <Col>
                        <div className="projectName">{this.state.name}</div>
                    </Col>
                    <Col className="colAlignment">
                        <Button className="buttonGenerate" variant="outline-primary" onClick={this.handleGetNewInterval}>Generate Name</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table responsive>
                            <tbody>
                                {this.state.history.map(item => (
                                    <tr>
                                        <td key={item}>{item}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </span>
        );
    }
}

export default GenerateNewName;