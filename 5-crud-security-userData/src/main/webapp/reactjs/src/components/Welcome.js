import React from 'react';
import {Jumbotron} from "react-bootstrap";

export default function Welcome() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Book Shop</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                        Madry cytat ...
                    </p>
                    <footer className="blockquote-footer">
                        Mark Twain
                    </footer>
                </blockquote>
            </Jumbotron>
        );
}
