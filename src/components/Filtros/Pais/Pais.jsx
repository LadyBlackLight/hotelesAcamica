import React, { useState } from 'react';
import './pais.css'
import { hotelsData } from '../../../assets/data/data.js'

export default function Pais(props) {
    //De la data, traigo solo los países
    let hoteles = hotelsData.map(function (hotel) {
        return hotel.country;
    });
    //De los países filtro los repetidos
    let filtrado = hoteles.filter(function (elem, pos) {
        return hoteles.indexOf(elem) === pos;
    });
    //Data
    //const [hotelData, setHotelData] = useState(hotelsData);
    //Filtrar
    //const handleFiltrar = () => {
        //const filtrar = hotelData.filter(
          //(hotel, pos) => hotel.country === pos
        //);
        //setHotelData(filtrar);
      //};

      //onChange para coger el valor, useEffect para actualizar estado
    return (
        <div>
            <label htmlFor="country">País</label>
            <select name="country" id="pais">
                <option selected disabled>Selecciona un país</option>
                {filtrado.map(function (pais) {
                    return(<option value={pais}>{pais}</option>)
                })}
            </select>
        </div>
    )
}


