import React, { Component } from 'react';
import {Card, Form, Button, Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

export default class Book extends Component {

    constructor(props) {
        super(props)
        this.state = {username:"", password:"", enabled:"", roles:""};
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    submitBook(event) {
        alert("Username: " + this.state.username+ "Password: " +this.state.password);
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Book List</Card.Header>
                <Form onSubmit={this.submitBook} id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required
                                    type="text" name="username"
                                    value={this.state.username}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required
                                    type="text" name="password"
                                    value={this.state.password}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Password" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEnabled">
                                <Form.Label>Enabled</Form.Label>
                                <Form.Control required
                                    type="text" name="enabled"
                                    value={this.state.enabled}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Is Enabled?" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridRoles">
                                <Form.Label>Roles</Form.Label>
                                <Form.Control required
                                    type="text" name="roles"
                                    value={this.state.roles}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Roles" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                        <FontAwesomeIcon icon={faSave}/> Submit
                    </Button>
                </Card.Footer>
            </Form>
            </Card>

        );
    }


}
