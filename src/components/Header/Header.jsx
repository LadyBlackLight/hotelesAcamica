import React from 'react';
import './header.css';

export default function Header(props) {
    const desgloseFecha = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let fechaDeLLegada =
        props.llegada !== "" && props.llegada < props.salida
            ? ` Desde el ${new Date(props.llegada + "T00:00").toLocaleDateString("es-ES", desgloseFecha)}`
            : "";
    let fechaDeSalida =
        props.salida !== "" && props.salida > props.llegada
            ? ` hasta el ${new Date(props.salida + "T00:00").toLocaleDateString("es-ES", desgloseFecha)}`
            : "";
    return (
        <div className="bg-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Hoteles Acamica</h1>
                        <p>{fechaDeLLegada}
                        {fechaDeSalida}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
