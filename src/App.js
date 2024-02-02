import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Tickets from './Tickets';
import Contacts from './Contacts';
import HaveFun from './HaveFun/HaveFun';
import AppContainer from './AppContainer';
import Hotels from './Hotels/Hotels';

function App() {

return <Router>
    <div className="container">
      <nav>
        <Link to="/" className="navbar_link">Home</Link>
        <Link to="/tickets" className="navbar_link">Tickets</Link>
        <Link to="/shop" className="navbar_link">Shop</Link>
        <Link to="/hotels" className="navbar_link">Hotels</Link>
        <Link to="/contact-us" className="navbar_link">Contact us</Link>
        <Link to="/have-fun" className="navbar_link">Have fun</Link>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/tickets" element={<Tickets/>} />
      <Route path="/shop" element={<AppContainer/>} />
      <Route path="/hotels" element={<Hotels/>} />
      <Route path="/contact-us" element={<Contacts/>} />
      <Route path="/have-fun" element={<HaveFun/>} />
    </Routes>

  </Router>

}

export default App;
