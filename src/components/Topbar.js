import React from 'react';
import ReactDOM from 'react-dom/client';
import worldIcon from '../icons/world.svg'

export default function Topbar(){
    return(
        <header className='topbar'>
            <img src={worldIcon} alt="Logo" />
            <p>my travel journal.</p>
        </header>
    )
}