import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Home/Firebase";
import Product from "../Product/Product";

const AllProduct = () => {
  const [Laptops, setLaptops] = useState([]);
  const [Mobiles, setMobiles] = useState([]);
  const [Cameras, setCameras] = useState([]);
  
  
  const getProducts = (category) => {
    //getting all the products from db
    db.collection(category).onSnapshot((snapshot) => {
      let tempProduct = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data().obj,
      }));
      if (category === "Laptops") {
        setLaptops(tempProduct);
      }
      if (category === "Mobiles") {
        setMobiles(tempProduct);
      } else {
        setCameras(tempProduct);
      }
    });
  };
  useEffect(() => {
    getProducts("Laptops");
    getProducts("Cameras");
    getProducts("Mobiles");
  }, []);
 const allPd = [...Laptops, ...Cameras, ...Mobiles];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  shuffleArray(allPd);

  const get3Products = allPd.slice(1, 4);
 
  return (
  
    <Content>
    <ContentTitle>
        Recommended Product:
      </ContentTitle>
      <ContentBody className="row justify-content-center">
      {get3Products.map((item) => (
        <Product
        className="col-md-4 col-sm-10"
        category={item.product.category}
        title={item.product?.name}
        rating={item.product?.star}
        price={item.product?.price}
        image={item.product?.img}
        id={item.product?.key}
        key={item.product?.key}
        pdID={item.id}
        />
      ))}
      </ContentBody>
    </Content>
  );
};

export default AllProduct;

const Content = styled.div`
margin: 20px;
margin-top: -360px;
`;
const ContentTitle = styled.h3`
color: black;
text-align: center;
background-color: white;
font-size: 1.85em;
font-weight: bolder;

`;
const ContentBody = styled.div`
`;