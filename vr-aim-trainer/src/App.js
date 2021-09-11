import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarComp from "./components/navbarcomp.component";
// import components
// import Navbar from './components/navbar.component';


function App() {
  return (
    <Router>
      <div className="container-fluid">
      <NavbarComp />
        <p>Yo yo yo</p>
      </div>
    </Router>
  );
}

export default App;
