import { Paper, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiGetCall, apiPostCall } from '../../utils/axiosInstance';
import Loader from '../../utils/loader';
import { ProductButton, ProductDetail } from './ProductDetails.styles';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const loginStatus = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await apiGetCall(`/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    };
    getData();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  const addToCart = async () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Product added to cart');
    const finalProduct = {
      productId: product._id,
      ...product,
    };
    if (loginStatus.isLoggedIn) {
      await apiPostCall('/cart', { products: [finalProduct] });
    }
  };
  return (
    <ProductDetail>
      <div style={{ margin: '10px' }}>
        <Paper className="product-container">
          <div className="product-inner-container">
            <div>
              <img
                className="product-image"
                src={product.imageURL}
                alt={product.name}
              />
            </div>
            <div className="product-left-container">
              <Typography variant="h5" component="h3">
                {product.name}
              </Typography>
              <p className="product-price">
                Rs.
                {product.price}
              </p>
              <div className="product-price">
                <Rating
                  readonly
                  initialRating={product.rating}
                  fullSymbol={<StarIcon style={{ color: 'gold' }} />}
                  emptySymbol={<StarIcon style={{ color: 'grey' }} />}
                />
              </div>
              <div className="mt">
                <p>{product.description}</p>
              </div>
              <ProductButton
                onClick={() => {
                  addToCart();
                }}
              >
                Add to Cart
              </ProductButton>
            </div>
          </div>
        </Paper>
      </div>
    </ProductDetail>
  );
}

export default ProductDetails;
