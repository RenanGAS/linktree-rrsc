import React from 'react';
import './App.css';
import './scripts/switchThemeButton.js';

function App() {
  return (
    <div className="App">
      <label class="switchBtn" for="checkbox">
        <input type="checkbox" id="checkbox">
          <span class="slider round"></span>
        </input>
      </label>
    </div>
  );
}

export default App;
