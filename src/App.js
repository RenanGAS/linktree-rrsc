import React from 'react';
import { Container, Navbar } from 'reactstrap';
import './App.css';
import logo from './assets/logo_rr.png';

function App() {
  return (
    <div className="App">

      <Navbar className="justify-content-end" fixed="top" bg="light" expand="lg">
        <Container>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
        </Container>
      </Navbar>

      <div className="page-content">
        <img className="logo" src={logo} alt="RR Smart Cast" />
        <h3 className="title">R&R SmartCast</h3>
        <p className="subtitle">Building the future through code</p>
      </div>

    </div>
  );
}

export default App;
