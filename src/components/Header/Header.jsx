import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className="bg-header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Hoteles Acamica</h1>
                        <p>Desde el <strong>martes, 1 de enero de 2021</strong> hasta el <strong>miércoloes, 2 de enero de 2021</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
