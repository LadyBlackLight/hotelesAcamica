import React from 'react';
import Location from '../Tags/Location/Location.jsx';
import Rooms from '../Tags/Rooms/Rooms.jsx';
import Price from '../Tags/Price/Price.jsx';
//CSS
import './card.css';

export default function Card(props) {

    return (
        <div className="card-deck col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
                <div className="card-grid-image">
                    <div className="row">
                        <div className="col">
                            <img className="card-img-top img-fluid mx-auto" src={props.photo} alt={props.name} />
                        </div>
                    </div>
                </div>
                <div className="card-body min-height-card">
                    <h6 className="card-title"><strong>{props.name}</strong></h6>
                    <p className="card-text min-height-description">{props.description}</p>
                    <Location
                        city={props.city}
                        country={props.country}
                    />
                    <div className="row">
                        <div className="tag-container d-flex flex-wrap align-items-center justify-content-around">
                            <Rooms
                                rooms={props.rooms}
                            />
                            <Price
                                price={props.price}
                            />
                        </div>
                    </div>
                </div>
                <a href="https://es.airbnb.com/" target="_blank" rel="noreferrer" className="card-footer-c">
                    <p className="btn-book text-center">Reservar</p>
                </a>
            </div>
        </div>
    )
}
