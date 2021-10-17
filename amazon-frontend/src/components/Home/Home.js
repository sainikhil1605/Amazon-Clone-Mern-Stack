import React from 'react'
import { BannerImage, HomeContainer, ProductsContainer } from './HomeElements'
import banner from "../gradimage.jpg"
import Product from '../Product/Product'
function Home() {
    return (
        <HomeContainer>
            <BannerImage src={banner} />
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
    )
}

export default Home
