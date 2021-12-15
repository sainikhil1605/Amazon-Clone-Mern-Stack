import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../Context/Cart/Provider';
import { LoginContext } from '../../Context/Login/Provider';
import axiosInstance from '../../utils/axiosInstance';
import { ProductImage } from '../Product/ProductElements';
import {
  CheckInnerContainer,
  CheckOutItem,
  CheckOutItemDetails,
  CheckOutItems,
  CheckOutNameContainer,
  HeadingContainer,
  InnerContainer,
  LogoImageContainer,
  OuterContainer,
  PaymentContainer,
  PriceOrderContainer,
  ProductPrice,
} from './Checkout.styles';

const calculateTotalCost = (cart) => {
  const totalCost = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return totalCost;
};

function Checkout() {
  const history = useHistory();
  const [cart, dispatch] = React.useContext(CartContext);
  const [loginState] = React.useContext(LoginContext);
  useEffect(() => [cart]);
  const placeOrder = async () => {
    if (!loginState.isLoggedIn) {
      history.push('/login');
    }
    const products = cart.map((product) => ({
      productId: product._id || product.productId,
      quantity: product.quantity,
    }));
    await axiosInstance.post('/orders', { products });
    dispatch({ type: 'CLEAR_CART' });
    history.push('/orders');
  };
  const handleRemove = async (index, product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { index },
    });
    const productId = product._id || product.productId;
    await axiosInstance.delete(`/cart/${productId}`);
  };
  const handleDecrease = async (index, product) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: index });
    await axiosInstance.patch(`/cart/${product._id || product.productId}`, {
      action: 'DECREASE',
    });
  };
  const handleIncrease = async (index, product) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: index });
    await axiosInstance.patch(`/cart/${product._id || product.productId}`, {
      action: 'INCREASE',
    });
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <HeadingContainer>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Typography variant="h4">My Cart</Typography>
        </HeadingContainer>
        <CheckInnerContainer>
          <CheckOutItems>
            {cart.map((product, index) => (
              <CheckOutItem key={product._id}>
                <LogoImageContainer>
                  <ProductImage src={product.imageURL} alt="product" />
                </LogoImageContainer>
                <CheckOutNameContainer>
                  <div>{product.name}</div>
                  <div>{product.description}</div>
                  <div style={{ padding: '10px 0px' }}>In Stock</div>
                  <PriceOrderContainer>
                    <Button
                      type="button"
                      onClick={() => handleRemove(index, product)}
                    >
                      Remove
                    </Button>
                  </PriceOrderContainer>
                </CheckOutNameContainer>
                <ProductPrice>
                  Each:
                  <div>
                    Rs.
                    {product.price}
                  </div>
                </ProductPrice>
                <ProductPrice>
                  Quantity
                  <div>
                    <button
                      style={{ margin: '0px 5px' }}
                      type="button"
                      onClick={() => handleDecrease(index, product)}
                    >
                      -
                    </button>
                    {product.quantity}{' '}
                    <button
                      style={{ margin: '0px 5px' }}
                      type="button"
                      onClick={() => handleIncrease(index, product)}
                    >
                      +
                    </button>
                  </div>
                </ProductPrice>
                <ProductPrice>
                  Total:
                  <div>{product.quantity * product.price}</div>
                </ProductPrice>
              </CheckOutItem>
            ))}
          </CheckOutItems>
          <PaymentContainer>
            <div>
              <span>ENTER PROMO CODE</span>
              <CheckOutItemDetails>
                <TextField
                  type="text"
                  label="Promo Code"
                  varaint="outlined"
                  fullWidth
                />
                <Button type="button">Submit</Button>
              </CheckOutItemDetails>
            </div>
            <CheckOutItemDetails>
              <div>Shipping Details</div>
              <div>TBD</div>
            </CheckOutItemDetails>
            <CheckOutItemDetails>
              <div>Discount</div>
              <div>Rs. 0</div>
            </CheckOutItemDetails>
            <CheckOutItemDetails>
              <div>Estimated Total</div>
              <div>{calculateTotalCost(cart)}</div>
            </CheckOutItemDetails>
            <Button type="button" onClick={() => placeOrder()}>
              Checkout
            </Button>
          </PaymentContainer>
        </CheckInnerContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Checkout;
