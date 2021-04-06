import React from 'react';
import styled from 'styled-components';

const Mobile = () => {
    return (
        <Container>
          <Title>Mobile</Title> 
           <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6N73JJvdmPYRWrlLQHtQTpVPuE_3vxSx23khrN1cmREx-gaKUIWuNaIsUo0EEM_68gjQ&usqp=CAU" alt="Mobile" height="150px"/>
        </Container>
    );
};

export default Mobile;

const Container = styled.div`
`
const Image = styled.img`
height: 150px;
`
const Title = styled.h3`
background-color: #efefef;
padding: 4px ;
margin-bottom: 4px;
margin-top: 0;
color: black;
:hover{
    background-color: #b6c8d6
}
`