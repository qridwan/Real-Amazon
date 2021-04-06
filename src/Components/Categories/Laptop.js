import React from "react";
import styled from "styled-components";

const Laptop = () => {
  return (
    <Container>
      <Title>Laptop</Title>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdC4BnrztQeJn48YFs9l9VfAcqrrL6uJRzA&usqp=CAU"
        alt="Laptop"
      />
    </Container>
  );
};

export default Laptop;

const Container = styled.div``;
const Image = styled.img`
  height: 150px;
`;
const Title = styled.h3`
  text-decoration: none;
  color: black;
  background-color: #efefef;
  padding: 4px;
  margin-bottom: 4px;
  margin-top: 0;
  :hover{
      background-color: #b6c8d6;
  }
`;
