import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import Loader from '../../utils/loader';
import banner from '../gradimage.jpg';
import Product from '../Product';
import { BannerImage, HomeContainer, ProductsContainer } from './HomeElements';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axiosInstance.get('/products');
      if (res.status === 200) {
        setProducts(res.data.products);
      }
      setLoading(false);
    };
    getProducts();
  }, []);
  if (loading) {
    return <Loader />;
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
            product={product}
          />
        ))}
      </ProductsContainer>
      <ProductsContainer>
        <div>Shop By Category</div>
      </ProductsContainer>
    </HomeContainer>
  );
}

export default Home;
