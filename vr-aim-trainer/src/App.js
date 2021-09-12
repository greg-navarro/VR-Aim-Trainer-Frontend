import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarComp from "./components/navbarcomp.component";
import Leaderboard from "./components/leaderboard.component";
import Home from "./components/home.component";
// import components
// import Navbar from './components/navbar.component';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavbarComp />
        <br />
        <Route path="/" exact component={Home} />  
        <Route path="/leaderboard" component={Leaderboard} />
      </div>
     
    </Router>
  );
}

export default App;
