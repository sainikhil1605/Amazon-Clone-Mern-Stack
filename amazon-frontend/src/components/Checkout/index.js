import { Typography } from '@mui/material';
import React from 'react';
import logo from '../../logo.png';
import {
  CheckoutContainer,
  HeadingContainer,
  ImageContainer,
  InnerContainer,
  OuterContainer,
  ProductDescription,
} from './Checkout.styles';

function Checkout() {
  return (
    <OuterContainer>
      <InnerContainer>
        <HeadingContainer>
          <Typography variant="h1">Shopping Cart</Typography>
        </HeadingContainer>
        <CheckoutContainer>
          <ImageContainer>
            <img src={logo} alt="logo" width="180px" height="180px" />
          </ImageContainer>
          <ProductDescription>
            <h1>Product</h1>
          </ProductDescription>
        </CheckoutContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Checkout;
