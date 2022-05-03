import React from 'react';
import { useState } from 'react';
import './style.css';

function SwitchButton() {

    const [state, setState] = useState(false);

    const Switch = () => {

        setState(!state);

        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }

        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    return (
        <>
            <label className="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" onChange={Switch} checked={state} />
                <div className="slider round"></div>
            </label>
        </>
    );
}

export default SwitchButton;