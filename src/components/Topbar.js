import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "../logo.svg"

export default function Topbar(){
    return(
        <header className='topbar'>
            <img src={logo} alt="Logo" />
            <p>my travel journal.</p>
        </header>
    )
}