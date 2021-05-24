import React from 'react'
import './fecha.css'

export default function Fecha(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                <label htmlFor="availabilityFrom">Llegada</label>
                <input type="date" name="availabilityFrom" id="llegada" onChange={props.handleLlegada} value={props.llegada} />
            </div>
            <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
                <label htmlFor="availabilityFrom">Salida</label>
                <input type="date" name="availabilityTo" id="salida" onChange={props.handleSalida} value={props.salida}/>
            </div>
        </>
    )
}
