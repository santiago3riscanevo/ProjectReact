import React from 'react';
import '../assets/style/components/Categories.scss';

const Categories = ({ children, list }) => (
  <div className='categories'>
    <h3 className='categories__title'>{list}</h3>
    {children}
  </div>
);

export default Categories;
