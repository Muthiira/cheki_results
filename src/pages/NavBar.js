import React from "react";
import {Navbar, Nav, Form, Button, Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "../components/Home";
import About from "../components/About";
import "./../styles/Navbar.css"
export default function NavBar() {
return (
<>
<Router class="navbar">
<Navbar bg="dark" variant="dark" expand="lg">
        <Container>
		  <div></div>
          <Navbar.Brand href="#home">Masomo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
			<Nav.Link as={Link} to={"/contacts"}>Contacts</Nav.Link>
          </Nav>
		  <div>
		  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
		  </div>
		  <div>
		  <Button  as={Link} to={"/login"} variant="outline-success">Login</Button>
		  </div>
        </Container>
</Navbar>
<Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
		<Route path="/about">
          <About/>
        </Route>
      </Switch>
</Router>

</>
);
}