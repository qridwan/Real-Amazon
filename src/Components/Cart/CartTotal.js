import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";

const CartTotal = ({ getTotalPrice, getCount }) => {
  return (
    <Container>
      <SubTotal>
        Subtotal({getCount()} items):{" "}
        <NumberFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </SubTotal>
      <CheckOutButton>Check Out</CheckOutButton>
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
