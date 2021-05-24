import React from 'react';
import './filtros.css';
import Pais from './Pais/Pais.jsx';
import Precio from './Precio/Precio.jsx'
import Tamanio from './Tamanio/Tamanio.jsx'
import Reset from './Reset/Reset.jsx'
import Fecha from './Fecha/Fecha.jsx';

export default function Filtros(props) {
    return (
        <div className="bg-filtros">
            <div className="container-fluid">
                <div className="row">
                    <Fecha handleLlegada={props.handleLlegada} llegada={props.llegada} handleSalida={props.handleSalida} salida={props.salida}/>
                    <Pais
                        key={props.id}
                        filtrado={props.filtrado}
                        handlePaises={props.handlePaises}
                        pais={props.pais}
                    />
                    <Precio handlePrecio={props.handlePrecio} precio={props.precio}/>
                    <Tamanio handleTamanio={props.handleTamanio} tamanio={props.tamanio}/>
                    <Reset handleReset={props.handleReset} reset={props.reset}/>
                    </div>
            </div>
        </div>
    )
}
