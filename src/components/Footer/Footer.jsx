import React from 'react'

export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className="container">
            <div className="row">
                <div className="col">
                    <p className="text-center"> Vanessa Hernández Maldonado | {year} &copy; Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}
