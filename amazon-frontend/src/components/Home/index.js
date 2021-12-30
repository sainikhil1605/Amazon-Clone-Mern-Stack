import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { apiGetCall } from '../../utils/axiosInstance';
import Loader from '../../utils/loader';
import banner from '../gradimage.jpg';
import Product from '../Product';
import { BannerImage, HomeContainer, ProductsContainer } from './HomeElements';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const search = useSelector((state) => state.search.search);
  const [displayFilters, setDisplayFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [inStock, setInStock] = useState('');
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await apiGetCall(
        `/products?page=${page}&limit=${limit}&name=${search}&select=-description&category=${category}&numericFilters=price>${priceRange[0]},price<${priceRange[1]},rating>${ratingRange[0]},rating<${ratingRange[1]}&inStock=${inStock}`
      );
      setProducts(res.data.products);
      setTotalPages(res.data.totalPages);
      setTotal(res.data.count);
      setLoading(false);
    };
    getProducts();
  }, [search, page, limit]);
  const handleFilters = async () => {
    if (page === 1) {
      const res = await apiGetCall(
        `/products?page=${page}&name=${search}&select=-description&category=${category}&numericFilters=price>${priceRange[0]},price<${priceRange[1]},rating>${ratingRange[0]},rating<${ratingRange[1]}&inStock=${inStock}`
      );

      setProducts(res.data.products);
      setDisplayFilters(false);
      setTotalPages(res.data.totalPages);
      setPage(1);
    } else {
      setPage(1);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <HomeContainer>
      <BannerImage src={banner} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
        }}
      >
        <div className="filters">
          <button
            className="filter-button"
            style={{ width: '100%' }}
            type="button"
            onClick={() => {
              setDisplayFilters((prevState) => !prevState);
            }}
          >
            Filters +
          </button>
          <div className={displayFilters ? 'show' : 'hide'}>
            <div className="filters-paper">
              <FormControl variant="outlined" style={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select by Category
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  label="Select By Category"
                >
                  <MenuItem value="Grocery">Grocery</MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="slider">
              Price Range
              <Slider
                value={priceRange}
                onChange={(e, newValue) => {
                  setPriceRange(newValue);
                }}
                valueLabelDisplay="auto"
                max={1000}
              />
            </div>
            <div className="slider">
              Rating Range
              <Slider
                value={ratingRange}
                step={0.5}
                onChange={(e, newValue) => {
                  setRatingRange(newValue);
                }}
                max={5}
                valueLabelDisplay="auto"
              />
            </div>
            <div className="slider">
              <FormControlLabel
                control={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Checkbox
                    checked={inStock}
                    onChange={() => setInStock(!inStock)}
                    name="Stock"
                  />
                }
                label="Show only in stock"
              />
            </div>
            <div className="slider">
              <button
                type="button"
                className="filter-button"
                onClick={() => {
                  handleFilters();
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductsContainer>
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.name}
            price={product.price}
            rating={product.rating}
            product={product}
          />
        ))}
      </ProductsContainer>
      <div className="pagination">
        <div className="limit-filter">
          <span>Showing</span>
          <FormControl variant="outlined" size="small" margin="dense">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={limit}
              onChange={(e) => {
                setLimit(e.target.value);
              }}
              label="Select By Category"
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </FormControl>
          <span>per page out of {total}</span>
        </div>
        <div className="page-button-container">
          <div>{totalPages !== 1 ? 'View More Products ' : null}</div>
          <div>
            <button
              className="page-buttons"
              type="button"
              onClick={() => setPage(page - 1)}
            >
              {'<'}
            </button>
            {Array(totalPages)
              .fill(null)
              .map((value, index) => (
                <button
                  style={{ margin: '0px 10px' }}
                  type="button"
                  key={index}
                  className={`page-buttons ${
                    page === index + 1 ? 'active' : ''
                  }`}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              ))}
            <button
              className="page-buttons"
              type="button"
              onClick={() => setPage(page + 1)}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
