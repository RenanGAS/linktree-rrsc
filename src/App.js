import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import logo from './assets/logo_rr.png';
import SwitchButton from './components/SwitchButton/SwitchButton.js';

function App() {
  return (
    <div className="App">

      <SwitchButton />

      <div className="page-content">

        <img className="logo" src={logo} alt="RR Smart Cast" />

        <h3 className="title">R&R SmartCast</h3>
        <p className="subtitle">Building the future through code</p>

        <div className="group-buttons">
          <Button className="social-buttons fb-button" href="https://www.facebook.com/rrsmartcast" target="_blank"></Button>{' '}
          <Button className="social-buttons tw-button" href="https://twitter.com/SmartcastR" target="_blank"></Button>{' '}
          <Button className="social-buttons inst-button" href="https://www.instagram.com/rrsccompany/" target="_blank"></Button>{' '}
          <Button className="social-buttons em-button" href="mailto:renansakaoki@gmail.com" target="_blank"></Button>{' '}
          <Button className="social-buttons gh-button" href="https://github.com/RRSCCompany" target="_blank"></Button>
        </div>

        <Button className="web-button" href="https://rrsmartcast.com.br" target="_blank"> Go to the website </Button>

        <h4 className="founders-topic">Founders</h4>

        <div className="group-buttons">
          <Button className="founders-buttons renan-button" href="mailto:renansakaoki@gmail.com" target="_blank"></Button>{' '}
          <Button className="founders-buttons rodolfo-button" href="https://www.instagram.com/rodolfo_presa" target="_blank"></Button>{' '}
        </div>

      </div>

    </div>
  );
}

export default App;
