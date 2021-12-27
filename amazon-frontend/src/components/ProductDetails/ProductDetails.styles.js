import styled from 'styled-components';

const ProductDetail = styled.div`
  width: 100%;
  .product-container {
    padding: 20px;
    margin: auto;

    max-width: 900px;
  }
  .product-inner-container {
    display: flex;
    flex-direction: row;
    padding: 20px;
    @media (max-width: 780px) {
      text-align: center;
      flex-direction: column;
    }
  }
  .product-image {
    width: 100%;
    max-width: 350px;
  }
  .product-left-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .product-price {
    margin-top: 20px;
    color: grey;
  }
  .mt {
    margin-top: 20px;
  }
`;
const ProductButton = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #f0c14b #9c7e31 #846a29;
`;
export { ProductDetail, ProductButton };
