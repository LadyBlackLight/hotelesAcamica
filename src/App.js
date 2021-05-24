import './App.css';
import React, { useState } from "react"
import Header from './components/Header/Header.jsx';
import Filtros from './components/Filtros/Filtros.jsx';
import ErrorFecha from './components/Filtros/ErrorFecha/ErrorFecha.jsx';
import ErrorBusqueda from './components/Filtros/ErrorBusqueda/ErrorBusqueda.jsx';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import { hotelsData } from './assets/data/data.js';

function App() {
  //Manejar los select de fecha
  const [llegada, setLlegada] = useState("")
  const [salida, setSalida] = useState("")

  const handleLlegada = (e) =>{
    setLlegada(e.target.value)
  }

  const handleSalida = (e) =>{
    setSalida(e.target.value)
  }
  //De la data, traigo solo los países
  let hoteles = hotelsData.map((hotel) => {
    return hotel.country;
  });
  //De los países filtro los repetidos
  let filtrado = hoteles.filter((elem, pos) => {
    return hoteles.indexOf(elem) === pos;
  });
  //Manejar el select de paises
  const [paises, setPaises] = useState("ver-todos");
  const handlePaises = (e) => {
    setPaises(e.target.value);
  }
  //Manejar el select de precios
  const [precios, setPrecios] = useState("ver-todos");
  const handlePrecio = (e) => {
    setPrecios(e.target.value);
  }
  //Manejar el select de tamaño
  const [tamanios, setTamanio] = useState("ver-todos");
  const handleTamanio = (e) => {
    setTamanio(e.target.value);
  }
  //Manejar botón de reset
  const [reset, setReset] = useState("");
  const handleReset = (e) => {
    setReset(setLlegada(""), setSalida(""), setPaises("ver-todos"), setPrecios("ver-todos"), setTamanio("ver-todo"))
  }
  //Mostrar resultados
  let llegadaNum = new Date(llegada + "T00:00")
  let salidaNum = new Date(salida + "T00:00")
  const filterHoteles = () => {
    let hotelesFiltrado = hotelsData.filter((hotel)=>{
      if (llegada !== "" && salida !== "") {
        return(
          llegadaNum.getTime() <= hotel.availabilityFrom &&
            salidaNum.getTime() <= hotel.availabilityTo &&
            llegadaNum.getTime() <= salidaNum.getTime() &&
            llegadaNum.getTime() > new Date() &&
            hotel.availabilityFrom > new Date()
        )
      }
      return hotel
    })
    .filter((hotel) => {
      if (paises !== "ver-todos") {
        return hotel.country === paises
      }
      return hotel
    })
      .filter((hotel) => {
        if (precios !== "ver-todos") {
          let num = parseInt(precios, 10)
          return hotel.price === num
        }
        return hotel
      })
      .filter((hotel) => {
        if (tamanios !== "ver-todos") {
          if (tamanios === "pequenio") {
            return hotel.rooms <= 10
          }
          if (tamanios === "mediano") {
            return hotel.rooms > 10 && hotel.rooms <= 20;
          }
          if (tamanios === "grande") {
            return hotel.rooms > 20
          }
        }
        return hotel
      })
    return hotelesFiltrado
  }

  let filteresHotels = filterHoteles()
  const hotelesFiltrados = filteresHotels.map((hotel) => {
    return (
      <Card
        key={hotel.id}
        photo={hotel.photo}
        name={hotel.name}
        description={hotel.description}
        city={hotel.city}
        country={hotel.country}
        rooms={hotel.rooms}
        price={hotel.price}
      />
    )
  })
  return (
    <div className="App">
      <Header llegada={llegada} salida={salida} />
      <Filtros
      llegada ={llegada}
      handleLlegada={handleLlegada}
      salida ={salida}
      handleSalida={handleSalida} 
      key={hotelsData.id}
      filtrado={filtrado}
      handlePaises={handlePaises}
      pais={paises}
      handlePrecio={handlePrecio}
      precio={precios}
      handleTamanio={handleTamanio}
      tamanio={tamanios}
      handleReset={handleReset}
      reset={reset}
      />

      <div className="container d-flex flex-wrap align-items-center justify-content-center container-hoteles">
        {hotelesFiltrados}
        {
          llegada !== "" && salida !== "" && llegada > salida ? (
            <ErrorFecha/>
          ) : hotelesFiltrados == "" ? (
            <ErrorBusqueda/>
          ) :("")
        }
      </div>

      <Footer />
    </div>
  );
}

export default App;
