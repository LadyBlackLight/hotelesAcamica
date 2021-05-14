import './App.css';
import Header from './components/Header/Header.jsx';
import Filtros from './components/Filtros/Filtros.jsx';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import { hotelsData } from './assets/data/data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Filtros/>
      <div className="container d-flex flex-wrap align-items-center justify-content-center container-hoteles">
      {hotelsData.map(function (hotel) {
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
          
        );
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
