import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import banner from '../gradimage.jpg';
import Product from '../Product/Product';
import { BannerImage, HomeContainer, ProductsContainer } from './HomeElements';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const res = await axiosInstance.get('/products');
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    };
    getProducts();
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <HomeContainer>
      <BannerImage src={banner} />
      <ProductsContainer>
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.name}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </ProductsContainer>
      <ProductsContainer>
        <Product
          id="12345"
          title="The amazon The amazonThe amazon The amazon The amazon The amazon The amazon"
          price={100}
          rating={5}
        />
        <Product
          id="12345"
          title="The amazon The amazonThe amazon The amazon The amazon The amazon The amazon"
          price={100}
          rating={5}
        />
        <Product
          id="12345"
          title="The amazon The amazonThe amazon The amazon The amazon The amazon The amazon"
          price={100}
          rating={5}
        />
      </ProductsContainer>
      <ProductsContainer>
        <Product
          id="12345"
          title="The amazon The amazonThe amazon The amazon The amazon The amazon The amazon"
          price={100}
          rating={5}
        />
      </ProductsContainer>
    </HomeContainer>
  );
}

export default Home;
