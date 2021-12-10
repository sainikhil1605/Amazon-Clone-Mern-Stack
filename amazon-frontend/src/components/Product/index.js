/* eslint-disable no-unused-vars */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Rating from 'react-rating';
import logo from '../../logo.png';
import { Context } from '../Context/Provider';
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
  const [state, dispatch] = React.useContext(Context);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const addToCart = () => {
    const temp = dispatch({ type: 'ADD_TO_CART', payload: product });
    console.log(temp);
  };
  return (
    <ProductContainer>
      <ProductImage src={logo} alt="Product Image" />
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
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
          setLoading((prev) => !prev);
        }}
      >
        Add to Cart
      </ProductButton>
    </ProductContainer>
  );
}
export default Product;
