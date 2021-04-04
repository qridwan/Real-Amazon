import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content></Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`

max-width: 1200px;
margin: 0 auto;

`;
const Banner = styled.div`

min-height: 600px;
background-position: center
background-size: cover;
mask-image:  linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
background: url("https://i.ibb.co/dKLRByV/Banner.jpg");

`;
const Content = styled.div``;
