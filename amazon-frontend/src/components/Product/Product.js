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

function Product({ title, price, rating }) {
  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </ProductRating>
      </ProductInfo>
      <ProductImage src={logo} alt="Ok" />
      <ProductButton>Add to Cart</ProductButton>
    </ProductContainer>
  );
}
export default Product;
