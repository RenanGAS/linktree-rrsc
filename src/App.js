import React from 'react';
import { Container, Navbar } from 'reactstrap';
import './App.css';
// import './scripts/switchThemeButton.js';
import logo from './assets/logo_rr.png';

function App() {
  return (
    <div class="App">

      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <div class="slider round"></div>
            </label>
          </div>
        </Container>
      </Navbar>
      
      <Container>
        <img class="logo" src={logo} alt="RR Smart Cast" />
      </Container>

      <script src="./scripts/switchThemeButton.js"></script>

    </div>
  );
}

export default App;
