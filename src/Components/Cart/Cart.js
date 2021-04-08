import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

const Cart = ({cart}) => {
const getTotalPrice = () => {
let total = 0 ;
cart.forEach((item) => {
    total += (item.product.quantity * item.product.price)
})
    return total;
};

const getCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.product.quantity;
    })
  
    return count;
  
  }


    return (
        <Container>
            <CartItems cart={cart}/>
            <CartTotal cart={cart} getCount={getCount} getTotalPrice={getTotalPrice}/>
        </Container>
    );
};

export default Cart;

const Container = styled.div`
display: flex;
padding: 14px 18px 0 18px;
align-items: flex-start;

`