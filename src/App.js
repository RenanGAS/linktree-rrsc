import React from 'react';
import './App.css';
import '../scripts/switchThemeButton.js';
import logo from '../assets/logo_rr.png';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="theme-switch-wrapper">
          <label className="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </nav>
      <img className="logo" src={logo} alt="RR Smart Cast"/>
    </div>
  );
}

export default App;
