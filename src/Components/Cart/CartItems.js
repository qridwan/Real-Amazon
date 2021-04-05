import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = ({cart}) => {

 
    return (
        <Container>
           <Title><h1>Shopping Cart</h1></Title>
           <hr></hr>
           <ItemsContainer>
               {
                   cart.map((obj)=>(
                       <CartItem key={obj.id} id={obj.id} item={obj.product}/>
                   ))
               }
           </ItemsContainer>
        </Container>
    );
};

export default CartItems;

const Container = styled.div`
min-height: 300px;
flex: 0.8;
padding: 20px;
margin-right: 18px;

background-color: lightgrey;
`

const Title = styled.div``
const ItemsContainer = styled.div`

`