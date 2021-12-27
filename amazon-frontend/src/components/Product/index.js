/* eslint-disable no-unused-vars */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../utils/axiosInstance';
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

  const dispatch = useDispatch();
  const state = useSelector((tempstate) => tempstate.cart);
  const loginStatus = useSelector((tempstate) => tempstate.login);
  useEffect(() => {}, [state]);
  const history = useHistory();
  const addToCart = async () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Product added to cart');
    const finalProduct = {
      productId: product._id,
      ...product,
    };
    if (loginStatus.isLoggedIn) {
      await axiosInstance.post('/cart', { products: [finalProduct] });
    }
  };
  return (
    <ProductContainer>
      <ProductImage src={product.imageURL} alt="Product" />
      <Link to={`/product/${product._id}`} className="product-link">
        <ProductInfo onClick={() => history.push(`/product/${product._id}`)}>
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
        </ProductInfo>
      </Link>
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
