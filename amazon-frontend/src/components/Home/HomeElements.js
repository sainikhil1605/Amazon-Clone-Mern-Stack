import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  .filters-paper {
    background-color: #fafafa;
    width: 100%;
    z-index: 1;
    position: relative;
  }
  .show {
    position: absolute;
    display: flex;

    z-index: 100;
    background-color: #fafafa;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: calc(25% - 40px);
    @media (max-width: 768px) {
      width: calc(60% - 40px);
    }
    padding: 20px;
  }
  .hide {
    display: none;
  }
  .slider {
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }
  .filters {
    width: 25%;
    @media (max-width: 768px) {
      width: 60%;
    }
  }
  .filter-button {
    background-color: #3498db;
    border: none;
    color: white;
    padding: 15px;
    border-radius: 10px;
  }
  .pagination {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  .limit-filter {
    display: flex;
    align-items: center;
  }
  .page-button-container {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .page-buttons {
    background-color: #fafafa;
    border: none;
    cursor: pointer;
    color: gray;

    padding: 5px 10px;
    border-radius: 5px;
  }
  .active {
    background-color: #3498db;
    color: white;
  }
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
