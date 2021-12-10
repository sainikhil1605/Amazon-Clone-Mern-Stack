import React from 'react';
import logo from '../../logo.png';
import {
  ProductButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
} from './ProductElements';

function Product({ title, price, rating, description }) {
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
          {Array(Math.floor(rating))
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </ProductRating>
        <p>{description}</p>
      </ProductInfo>
      <ProductButton>Add to Cart</ProductButton>
    </ProductContainer>
  );
}
export default Product;
