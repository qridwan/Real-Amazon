import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../Home/Firebase";

const Product = ({ title, price, image, rating, id, category, pdID }) => {
  const addToCart = () => {
    const cartItem = db.collection("CartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("CartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <FullContent className="mb-2 mx-2">
      <Container>
        <Link to={`/details/${category}/${pdID}`}>
          {" "}
          <Title>{title}</Title>{" "}
        </Link>
        <Price>${price}</Price>
        <Rating>
          {Array(rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </Rating>
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>

        <ActionSection>
          <AddToCartButton onClick={addToCart}>ADD to cart</AddToCartButton>
        </ActionSection>
      </Container>
    </FullContent>
  );
};

export default Product;

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid grey;
z-index: 1;
flex: 1;
padding 20px;
height: 500px;
width: 350px;
position: relative;
`;

const FullContent = styled.div``;
const Title = styled.span``;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: 600;
  margin-top: 10px;
`;
const Rating = styled.div``;
const Image = styled.img`
  object-fit: contain;
  position: absolute;
  bottom: 50px;
  left: 14%;
`;
const AddToCartButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #ff8c08;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 2px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
`;

const ActionSection = styled.div`
  background-color: cyan;
  margin-top: 10px;
  justify-content: center;
  display: flex; ;
`;
