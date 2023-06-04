import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';

import './Products.style.css';
import actionTypes from '../../actions/actionTypes';


const Products = (props) => {
  const dispatch = useDispatch();
  const {
    filteredProducts
  } = useSelector(state => state);
  
  const handleAddToCart = product => () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {filteredProducts.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
