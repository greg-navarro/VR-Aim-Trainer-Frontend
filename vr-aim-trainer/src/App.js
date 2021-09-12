import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarComp from "./components/navbarcomp.component";
import Leaderboard from "./components/leaderboard.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Contact from "./components/contact.component";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavbarComp />
        <br />
        <Route path="/" exact component={Home} />  
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
     
    </Router>
  );
}

export default App;
