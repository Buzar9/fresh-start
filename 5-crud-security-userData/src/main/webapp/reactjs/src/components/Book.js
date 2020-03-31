import React, { Component } from 'react';
import {Card, Form, Button, Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';

export default class Book extends Component {

    constructor(props) {
        super(props)
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        username: "", password: "", enabled: "", roles: ""
    };

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitBook = event => {
        event.preventDefault();

        const
        book = {
            username: this.state.username,
            password: this.state.password,
            enabled: this.state.enabled,
            roles: this.state.roles
        };

        axios.post("http://localhost:8080/users", book)
            .then(response => {
                if(response.data != null) {
                    this.setState(this.initialState);
                    alert("Book Saved Successfully")
                }
            });
    }

    bookChange= event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        const {username, password, enabled, roles} = this.state;

        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Book List</Card.Header>
                <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="username"
                                    value={username} onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="password"
                                    value={password} onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Password" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEnabled">
                                <Form.Label>Enabled</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="enabled"
                                    value={enabled} onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Is Enabled?" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridRoles">
                                <Form.Label>Roles</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="roles"
                                    value={roles} onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Roles" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                        <FontAwesomeIcon icon={faSave}/> Submit
                    </Button>{" "}
                    <Button size="sm" variant="info" type="reset">
                        <FontAwesomeIcon icon={faUndo} /> Reset
                    </Button>
                </Card.Footer>
            </Form>
            </Card>

        );
    }


}
