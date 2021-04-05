import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "./Firebase";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {

    //getting all the products from db
    db.collection("Products").onSnapshot((snapshot) => {
      let tempProduct = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProduct);
   
    });
  };
useEffect(() => {
getProducts()
console.log(products);
}, [])
  

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {
            products.map((obj) => <Product
            title= {obj.product.name}
            rating= {obj.product.rating}
            price= {obj.product.price}
            image= {obj.product.image}
            id= {obj.id}
            key= {obj.id}
            />)
        }
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Banner = styled.div`
min-height: 600px;
background-position: center
background-size: cover;
mask-image:  linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
background: url("https://i.ibb.co/dKLRByV/Banner.jpg");

`;
const Content = styled.div`
background-color: white
padding-left: 10px;
// padding-right: 10px;
margin-top: -350px;
display: flex;
`;
