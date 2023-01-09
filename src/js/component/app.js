import { useState } from "react";
import React from 'react';
import Apps from './app.css';

function App(){
    const [color, setColor] = useState('')

    return (
        <div className="container">
            <div className="bar">
            </div>
            <div className="body">
                <div className={`red ${color === 'red' ? 'on' : ''}`} onClick={() =>setColor('red')}></div>
                <div className={`yellow ${color === 'yellow' ? 'on' : ''}`} onClick={() =>setColor('yellow')}></div>
                <div className={`green ${color === 'green' ? 'on' : ''}`} onClick={() =>setColor('green')}></div>
            </div>
        </div>

    );
};

export default App;