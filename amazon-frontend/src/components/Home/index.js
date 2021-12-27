import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
import Loader from '../../utils/loader';
import banner from '../gradimage.jpg';
import Product from '../Product';
import { BannerImage, HomeContainer, ProductsContainer } from './HomeElements';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const search = useSelector((state) => state.search);
  const pages = [1, 2, 3];
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      let res;
      if (search) {
        res = await axiosInstance.get(`/products/?name=${search}`);
      } else {
        res = await axiosInstance.get(`/products?page=${page}`);
      }
      if (res.status === 200) {
        setProducts(res.data.products);
      }
      setLoading(false);
    };
    getProducts();
  }, [page, setPage, search]);
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
      <div
        style={{
          float: 'right',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        View More Products
        {'>>'}
        {pages.map((pageNum) => (
          <button
            style={{ margin: '0px 10px' }}
            type="button"
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
            }}
          >
            {pageNum}
          </button>
        ))}
      </div>
      <ProductsContainer>
        <div>Shop By Category</div>
      </ProductsContainer>
    </HomeContainer>
  );
}

export default Home;
