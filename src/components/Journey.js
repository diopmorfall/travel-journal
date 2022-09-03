import React from 'react';
import ReactDOM from 'react-dom/client';
import locationIcon from '../icons/location.svg'

export default function Journey(props){
    return(
        <section className='journey'>
            <img className='journey-pic' src={props.imgUrl} alt='Journey picture' />
            <div className='journey-details'>
                <div className='journey-location'>
                    <img src={locationIcon} alt='Location icon' />
                    <span>{props.country.toUpperCase()}</span>   
                    <a href={props.coordinates}>View on Google Maps</a>
                </div>
                <h1>{props.location}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p className='journey-description'>
                    {props.description}
                </p>
            </div>
        </section>
    )
}