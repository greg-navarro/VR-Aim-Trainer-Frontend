import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import components
// import Navbar from './components/navbar.component';


function App() {
  return (
    <Router>
      <div className="container-fluid">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">VR Aim Trainer</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <p>Yo yo yo</p>
      </div>
    </Router>
  );
}

export default App;
