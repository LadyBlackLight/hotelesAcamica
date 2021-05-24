import React from 'react'
import './reset.css'

export default function Reset(props) {
    return (
        <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-center justify-content-end flex-column">
            <button id="reset" className="color-btn" onClick={props.handleReset} value={props.reset}>Limpiar Filtros</button>
        </div>
    )
}
