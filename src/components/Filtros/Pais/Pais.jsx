import React from 'react';
import './pais.css'

export default function Pais(props) {

    return (
        <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
            <label htmlFor="country">País</label>
            <select key={props.id} onChange={props.handlePaises} value={props.pais} name="country" id="pais">
                <option value="ver-todos">Todos los paises</option>
                {props.filtrado.map((pais)=> {
                    return(<option value={pais}>{pais}</option>)
                })}
            </select>
        </div>
    )
}


