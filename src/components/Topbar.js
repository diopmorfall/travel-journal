import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "../logo.svg"
import worldIcon from '../images/world.svg'

export default function Topbar(){
    return(
        <header className='topbar'>
            <img src={worldIcon} alt="Logo" />
            <p>my travel journal.</p>
        </header>
    )
}