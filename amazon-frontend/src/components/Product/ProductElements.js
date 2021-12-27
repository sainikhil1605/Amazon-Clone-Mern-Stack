import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  justify-items: flex-start;
  max-height: 400px;
  max-width: 400px;
  margin: 10px;
  padding: 20px;
  width: 100%;
  background-color: white;
  z-index: 1;
  margin: 10px;
  padding: 10px;
  @media (max-width: 780px) {
    max-width: 100%;
  }
  .product-link {
    text-decoration: none;
    color: inherit;
  }
`;
const ProductPrice = styled.p`
  margin-top: 5px;
`;
const ProductRating = styled.div``;
const ProductImage = styled.img`
  /* object-fit: contain; */

  /* max-width: 300px; */
  max-width: 300px;
  width: 100%;
  max-height: 200px;
  margin-bottom: 15px;
`;
const ProductButton = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #f0c14b #9c7e31 #846a29;
`;
const ProductInfo = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  ProductContainer,
  ProductPrice,
  ProductRating,
  ProductImage,
  ProductButton,
  ProductInfo,
};
