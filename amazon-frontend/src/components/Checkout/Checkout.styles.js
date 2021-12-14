import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  margin: 10px;
`;
const InnerContainer = styled.div`
  padding: 10px;
  width: 100%;
`;
const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const HeadingContainer = styled.div`
  display: flex;
  max-width: 150px;
  align-items: center;
  margin: auto;
`;
const ProductDescription = styled.div`
  display: flex;
`;
const CheckOutItem = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const ProductPrice = styled.div`
  padding: 40px 10px 0px 0px;
`;
const CheckOutItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const CheckOutImageContainer = styled.div`
  max-width: 300px;
`;
const LogoImageContainer = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
  object-fit: contain;
`;
const CheckOutNameContainer = styled.div`
  padding: 40px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
const CheckOutItems = styled.div`
  padding: 20px 0px;
`;
const PriceOrderContainer = styled.div`
  padding: 40px 10px 0px 0px;
  display: flex;
`;
const OrderImageContainer = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
`;
const CheckInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const PaymentContainer = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
`;
export {
  OuterContainer,
  InnerContainer,
  HeadingContainer,
  CheckoutContainer,
  ImageContainer,
  ProductDescription,
  CheckOutItem,
  CheckOutItemDetails,
  CheckOutImageContainer,
  CheckOutNameContainer,
  CheckOutItems,
  OrderImageContainer,
  PriceOrderContainer,
  ProductPrice,
  LogoImageContainer,
  PaymentContainer,
  CheckInnerContainer,
};
