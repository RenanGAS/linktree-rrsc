import React from 'react';
import './App.css';
import './scripts/switchThemeButton.js';
import logo from './assets/logo_rr.png';

function App() {
  return (
    <div class="App">
      <nav>
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox"/>
            <div class="slider round"></div>
          </label>
        </div>
      </nav>
      <img class="logo" src={logo} alt="RR Smart Cast"/>
    </div>
  );
}

export default App;
