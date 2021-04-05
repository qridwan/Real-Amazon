import React from "react";
import styled from "styled-components";
import { db } from "../Home/Firebase";

const CartItem = ({ item, id }) => {
  const { name, price, quantity, image } = item;
  let options = [];
  for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

  const deleteItem = (e) => {
      e.preventDefault()
      db.collection('CartItems').doc(id).delete();
  }

  const changeQuantity = (quantity) => {
    //changing quantity on the db
    db.collection("CartItems")
      .doc(id)
      .update({ quantity: +quantity });
  };
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartQuantityContainer>
            <select
              value={quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartQuantityContainer>
          <CartDeleteContainer
          onClick={deleteItem}>Delete</CartDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${price}</CartItemPrice>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  display: flex;
  margin-top: 15px;
  border-bottom: 1px solid black;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    max-height: 150px;
    max-width: 180px;
  }
`;
const CartItemInfo = styled.div`
  margin-top: 16px;
  flex-grow: 0.8;
`;
const CartItemInfoTop = styled.div`
  color: blue;
  h2 {
    font-size: 16px;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
const CartItemPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-left: 16px;
  margin-top: 16px;
`;
const CartQuantityContainer = styled.div`
select{
    border-radius:7px;
    background-color: cyan;
    padding: 8px ;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15)
    :focus{
  console.log("🚀 ~ file: CartItem.js ~ line 87 ~ CartItem ~ quantity", quantity)
        outline: none;
    }
}
`;
const CartDeleteContainer = styled.div`
  color: black;
  background-color: #ff8c08;
  font-size: 16px;
  margin-left: 18px;
  padding: 1px 20px;
  border: 2px solid black;
  font-weight: bold;
  cursor: pointer;
`;
