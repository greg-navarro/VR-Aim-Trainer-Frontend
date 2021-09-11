  
import React, { Component } from 'react';


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// note that the export statement is made in the declaration instead of at the end
export default class NavbarComp extends Component {  

	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Container fluid>
				<Navbar.Brand href="/">VR Aim Trainer</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="leaderboard">Leaderboard</Nav.Link>
					<Nav.Link href="about">About</Nav.Link>
					<Nav.Link href="contact">Contact</Nav.Link>
				</Nav>
				</Container>
			</Navbar>
			)
	}
}
