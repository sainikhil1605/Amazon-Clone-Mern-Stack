import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../Context/Cart/Provider';
import { LoginContext } from '../../Context/Login/Provider';
import logo from '../../logo.png';
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
  OrderImageContainer,
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
      productId: product._id,
      quantity: product.quantity,
    }));
    await axiosInstance.post('/orders', { products });
    dispatch({ type: 'CLEAR_CART' });
    history.push('/orders');
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
                <OrderImageContainer>
                  <ProductImage src={logo} alt="product" />
                </OrderImageContainer>
                <CheckOutNameContainer>
                  <div>{product.name}</div>
                  <div>{product.description}</div>
                  <div style={{ padding: '10px 0px' }}>In Stock</div>
                  <PriceOrderContainer>
                    <Button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: { index },
                        })
                      }
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
                      type="button"
                      onClick={() => {
                        dispatch({ type: 'DECREASE_QUANTITY', payload: index });
                      }}
                    >
                      -
                    </button>
                    {product.quantity}{' '}
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({ type: 'ADD_TO_CART', payload: product })
                      }
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
