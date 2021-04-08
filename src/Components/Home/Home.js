import React from "react";
import styled from "styled-components";
import Laptop from "../Categories/Laptop";
import Mobile from "../Categories/Mobile";
import Camera from "../Categories/Camera";
import { Link } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";
import { Gallery } from "./SliderFacilitites";
import { Footer } from "./Footer";

const Home = () => {

 
  return (
    <Container>
      <Banner></Banner>
      <AllProduct/>
      <Gallery/>
      <CategorySection>
        <CategoryTitle>Categories:</CategoryTitle>
        <CategoriesList>
          <Category>
            <Link to="/categories/Laptops">
              <Laptop />
            </Link>
          </Category>
          <Category>
            <Link to="/categories/Mobiles">
              <Mobile />
            </Link>
          </Category>
          <Category>
            <Link to="/categories/Cameras">
              <Camera />
            </Link>
          </Category>
        </CategoriesList>
      </CategorySection>
      <Footer/>
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
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background: url("https://i.ibb.co/dKLRByV/Banner.jpg");
  background-position: center;
  background-size: cover;
`;
const ContentTitle = styled.div`
text-align: center;
margin-bottom: 4px;
margin-top: -40px;
`;

const CategorySection = styled.div`
  margin-top: 20px;
  height: 300px;
`;
const CategoryTitle = styled.h2`
  text-align: center;
  margin-bottom: 4px;
`;
const CategoriesList = styled.div`
  display: flex;
  overflow-x: scroll;
  `

const Category = styled.div`
  flex: 1;
  text-align: center;
  border: 1px solid black;
  margin: 10px;
  max-height: 300px;
  max-width: 350px;
  cursor: pointer;
`;
