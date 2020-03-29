import React, { Component } from 'react';
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Book Shop</h1>
                <p>
                    Madry cytat...
                </p>
            </Jumbotron>
        );
    }

}
