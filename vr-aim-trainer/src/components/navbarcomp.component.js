  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// note that the export statement is made in the declaration instead of at the end
export default class NavbarComp extends Component {  

	render() {
		return (
			<Navbar>
				<Container fluid>
					<Link to="/" className="navbar-brand">VR Aim Trainer</Link>
					<Link to="/leaderboard" className="">Leaderboard</Link>
					<Link to="/contact" className="">Contact</Link>
				</Container>
			</Navbar>
			)
	}
}
