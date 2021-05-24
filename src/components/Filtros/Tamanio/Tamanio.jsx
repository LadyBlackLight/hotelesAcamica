import React from 'react'
import './tamanio.css'

export default function Tamannio(props) {
    //Hotel pequeño hasta 10 camas
    //Hotel mediado hasta 20 camas
    //Hotel grande más de 20 camas
    return (
        <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
            <label htmlFor="size">Tamaño</label>
            <select name="size" id="tamano" onChange={props.handleTamanio} value={props.tamanio}>
            <option value="ver-todos">Cualquier tamaño</option>
                <option value="pequenio">Hotel Pequeño</option>
                <option value="mediano">Hotel Mediado</option>
                <option value="grande">Hotel Grande</option>
            </select>
        </div>
    )
}
