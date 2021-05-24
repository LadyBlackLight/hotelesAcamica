import React from 'react'
import './precio.css'

export default function Precio(props) {
    return (
        <div className="col-12 col-md-6 col-lg d-flex flex-wrap align-items-start justify-content-center flex-column">
            <label htmlFor="price">Precio</label>
            <select name="price" id="precio" onChange={props.handlePrecio} value ={props.precio}>
            <option value="ver-todos">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </div>
    )
}
