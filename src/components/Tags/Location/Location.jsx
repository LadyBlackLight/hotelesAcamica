import React from 'react';
//CSS
import './location.css';
//IMG
import pin from '../../../assets/pin.svg';

export default function Location(props) {
    return (
        <div className="tag location d-flex flex-wrap align-items-center justify-content-start">
            <div className="tag-icon"><img src={pin} className="img-fluid mx-auto" alt="Pin Icon" /></div>
            <div className="tag-description"><p>{props.city}, {props.country}</p></div>
        </div>
    )
}
