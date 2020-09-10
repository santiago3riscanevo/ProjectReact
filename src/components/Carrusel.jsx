import React from 'react';
import '../assets/style/components/Carrusel.scss';

const Carrusel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);

export default Carrusel;
