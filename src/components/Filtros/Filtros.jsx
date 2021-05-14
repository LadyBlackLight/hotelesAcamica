import React from 'react';
import './filtros.css';
import Pais from './Pais/Pais.jsx';

export default function Filtros(props) {
    return (
        <div className="bg-filtros">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                        <label htmlFor="availabilityFrom">Llegada</label>
                        <input type="date" name="availabilityFrom" id="llegada" />
                    </div>
                    <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                        <label htmlFor="availabilityFrom">Salida</label>
                        <input type="date" name="availabilityTo" id="salida" />
                    </div>
                    <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                        <Pais
                        key={props.id}
                        country={props.country}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                        <label htmlFor="price">Precio</label>
                        <select name="price" id="precio">
                            <option selected disabled>
                                Selecciona un precio
                        </option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                        <label htmlFor="size">Tamaño</label>
                        <select name="size" id="tamano">
                            <option selected disabled>
                                Selecciona un tamaño
                        </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
