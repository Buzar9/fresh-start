import React, {Component} from 'react';
import {ButtonGroup, Button, Card, Image, Table} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default class BookList extends Component {

    constructor (props){
        super(props);
        this.state = {
            users : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/users")
            .then(response => response.data)
            .then((data) => {
                this.setState({users: data})
            });
    }

    deleteUser = (userId) => {
        axios.delete("http://localhost:8080/users/" + userId)
            .then(response => {
               if(response.data != null) {
                   alert(response.data);
                   this.setState({
                       users: this.state.users.filter(user => user.userId !== userId)
                   })
               }
            });
    };

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList}/> Book List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Roles</th>
                                <th>Data</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.length === 0 ?
                            <tr align="center">
                                <td colSpan="6"> Books Available.</td>
                            </tr>
                            :
                            this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    {/*<Image src={user.coverPhotoURL} roundedCircle width="25" height="25"/>*/}
                                    {user.username}
                                </td>
                                {/*<td>{user.password}</td>*/}
                                <td>{user.roles}</td>
                                <td>
{/* todo dodać tutaj przycisk do przekierowania do DATA */}
                                </td>
                                <td>
                                    <ButtonGroup>
                                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>{" "}
                                        <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this, user.userId)}><FontAwesomeIcon icon={faTrash}/></Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }


}
