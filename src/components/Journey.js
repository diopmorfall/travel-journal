import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Journey(props){
    return(
        <section className='journey'>
            <img className='journey-pic' src='' alt='Journey pic' />
            <div className='journey-details'>
                <div className='journey-location'>
                    <img src='location-icon' alt='Loc' />
                    <span>JAPAN </span>   
                    <a href='#'>View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                <p className='journey-description'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
    )
}