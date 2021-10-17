import styled from "styled-components";

export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
justify-items: flex-start;
max-height: 400px;
min-width: 100px;
margin:10px;
padding:20px;
width:100%;
background-color:white;

z-index:1;
margin:10px;
padding:10px;

`
export const ProductPrice = styled.p`
margin-top:5px;
`
export const ProductRating = styled.div``
export const ProductImage = styled.img`
object-fit: contain;
width:100%;
max-height: 200px;
margin-bottom: 15px;
`
export const ProductButton = styled.button`
background-color: #f0c14b;
border:1px solid; 
border-color: #f0c14b #9c7e31 #846a29;
`
export const ProductInfo = styled.div`
height:100px;
margin-bottom:15px;
`