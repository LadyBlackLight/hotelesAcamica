import React from 'react';
//CSS
import './rooms.css';
//IMG
import bed from '../../../assets/bed.svg';

export default function Rooms(props) {
    return (
        <div className="tag rooms d-flex flex-wrap align-items-center justify-content-start">
            <div className="tag-icon"><img src={bed} className="img-fluid mx-auto" alt="Bed Icon" /></div>
            <div className="tag-description"><p>{props.rooms} Habitaciones</p></div>
        </div>
    )
}
