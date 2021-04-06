import React from 'react';
import styled from 'styled-components';

const Camera = () => {
    return (
        <Container>
          <Title>Camera</Title>  
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjzjneTXVzoj8eOO93vRY2_zOB0a1lyHqETAk1E7NMg5dBiXNw6NtvuAZ6LfWxU1Cr2w&usqp=CAU" alt="Laptop" height="150px"/>
        </Container>
    );
};

export default Camera;

const Container = styled.div``
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
    background-color: #b6c8d6;
}
`