import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Welcome from "./components/Welcome";
import Footer from './components/Footer';
import Book from "./components/Book";
import BookList from "./components/BookList";
import UserList from "./components/UserList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    const marginTop = {
        marginTop:"20px"
    }

  return (
    <Router>
        <NavigationBar />
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/add" exact component={Book}/>
                        <Route path="/edit/:userId" exact component={Book}/>
                        <Route path="/list" exact component={BookList}/>
                        <Route path="/users" exact component={UserList}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
