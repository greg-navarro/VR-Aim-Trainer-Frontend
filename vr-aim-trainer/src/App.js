import {BrowserRouter as Router} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// import components
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <Router>
      <div className="container-fluid">
      <Navbar />
        <p>Yo yo yo</p>
      </div>
    </Router>
  );
}

export default App;
