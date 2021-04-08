import React, { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { UserContext } from "../../App";
import { db } from "../Home/Firebase";

const CartTotal = ({ cart, getTotalPrice, getCount }) => {
  console.log("🚀 ~ file: CartTotal.js ~ line 8 ~ CartTotal ~ cart", cart);

  const [user] = useContext(UserContext);
  const [confirmOrder, setConfirmOrder] = useState(false);

const ClearCart = () =>{
  db.collection("CartItems").doc().delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
}

  const handleCheckOut = () => {
    const price = getTotalPrice();
    const userEmail = user.email;
    const dateFormat = require("dateformat");
    const now = new Date();
    const orderedDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");

    const orderedInfo = cart?.map((obj) => ({
      product: obj.product?.name,
      quantity: obj.product?.quantity,
      image: obj.product?.image,
      price: obj.product?.price,
      date: orderedDate,
    }));

    const order = {
      infos: orderedInfo,
      user: userEmail,
      totalPrice: price
    };

    // Add a new document in collection "Orders"
    if (order.price !== 0) {
      db.collection("Orders")
        .doc()
        .set(order)
        .then(() => {
          console.log("Document successfully written!");
          setConfirmOrder(true);
          ClearCart();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      alert("choose product first!!");
    }
  };
  return (
    <Container>
      {!confirmOrder && (
        <>
          <SubTotal>
            Subtotal({getCount()} items):{" "}
            <NumberFormat
              value={getTotalPrice()}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </SubTotal>
          <CheckOutButton onClick={handleCheckOut}>Check Out</CheckOutButton>
        </>
      )}
      {confirmOrder && <h2>Order Confirmed!!</h2>}
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  flex: 0.3;
  padding: 20px;
  background-color: lightgrey;
`;

const SubTotal = styled.h2`
  margin-bottom: 16px;
`;
const CheckOutButton = styled.button`
background-color: #ff8c08;
padding: 4px 10px;
width: 100%;
border: 2px solid #FFCA28;
cursor: pointer;
font-size: 16px;
:hover{
    background-color: #E65100;
`;
