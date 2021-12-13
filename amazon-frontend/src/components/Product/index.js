/* eslint-disable no-unused-vars */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { CartContext } from '../../Context/Cart/Provider';
import logo from '../../logo.png';
import {
  ProductButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
} from './ProductElements';

function Product(props) {
  const { title, price, rating, description, product } = props;
  const [state, dispatch] = React.useContext(CartContext);

  useEffect(() => {}, [state]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  return (
    <ProductContainer>
      <ProductImage src={logo} alt="Product Image" />
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>Rs.</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          <Rating
            readonly
            initialRating={rating}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="gold" />}
            emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />}
          />
        </ProductRating>
        <p>{description}</p>
      </ProductInfo>
      <ProductButton
        onClick={() => {
          addToCart();
        }}
      >
        Add to Cart
      </ProductButton>
    </ProductContainer>
  );
}
export default Product;
