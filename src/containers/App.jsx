import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Catgories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Catgories list='Mi lista'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Catgories>

    <Catgories list='Mis Favoritas'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Catgories>

    <Catgories list='Recomendado'>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Catgories>

    <Footer />
  </div>
);

export default App;
