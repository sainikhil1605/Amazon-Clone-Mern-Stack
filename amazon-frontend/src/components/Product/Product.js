import React from 'react'
import { ProductButton, ProductContainer, ProductImage, ProductInfo, ProductPrice, ProductRating } from './ProductElements';
import logo from "../../logo.png"
function Product({ id, title, price, rating }) {
    return (
        <ProductContainer>
            <ProductInfo>
                <p>{title}</p>
                <ProductPrice>
                    <small>$</small>
                    <strong>{price}</strong>
                </ProductPrice>
                <ProductRating>
                    {
                        Array(rating).fill().map((_) => (
                            <span>⭐</span>
                        ))

                    }
                </ProductRating>
            </ProductInfo>
            <ProductImage src={logo} alt="Ok" />
            <ProductButton>Add to Cart</ProductButton>
        </ProductContainer>
    );
}
export default Product;