import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;
const BannerImage = styled.img`
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: -1;
  margin-bottom: -300px;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
  /* flex-wrap: wrap; */
`;

export { HomeContainer, BannerImage, ProductsContainer };
