import styled from 'styled-components';

const OuterContainer = styled.div`
  height: 100%;
  padding: 14px 18px 18px;
  background-color: #eaeded !important;
`;
const InnerContainer = styled.div`
  margin: auto;
  background-color: white;
  max-width: 750px;
  padding: 20px;
`;
const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const HeadingContainer = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
`;
const ProductDescription = styled.div`
  display: flex;
`;
export {
  OuterContainer,
  InnerContainer,
  HeadingContainer,
  CheckoutContainer,
  ImageContainer,
  ProductDescription,
};
