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
  margin-bottom: -200px;
  @media (max-width: 780px) {
    margin-bottom: -100px;
  }
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
`;

export { HomeContainer, BannerImage, ProductsContainer };
