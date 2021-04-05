import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../Home/Firebase";

const Product = ({ title, price, image, rating, id }) => {
  console.log(id)
  const addToCart = () => {
    const cartItem = db.collection("CartItems").doc(id);
    cartItem.get().then((doc) => {
    console.log("🚀 ~ file: Product.js ~ line 9 ~ cartItem.get ~ doc", doc)
      
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      }else{
        db.collection('CartItems').doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1

        })
      }
    });
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rate) => (
            <span>⭐</span>
          ))}
      </Rating>
      <Image src={image}></Image>
      <ActionSection>
       <Link to="/cart"> <AddToCartButton
        onClick={addToCart}>ADD to cart</AddToCartButton>
        </Link>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
background-color: white;
border: 2px solid grey;
z-index: 1;
flex: 1;
padding 20px;
margin: 10px;
max-height: 300px;
display: flex;
flex-direction: column;

`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 600;
  margin-top: 10px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const AddToCartButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #ff8c08;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 2px;
  cursor: pointer;
`;

const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 10px;
`;
