import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../Home/Firebase";
import Product from "../Product/Product";

const CategoryPage = () => {
  const [productData, setProductData] = useState([]);
  const { category } = useParams();
 

  const getCategoryData = () =>
    //getting all the product products from db
    db.collection(category).onSnapshot((snapshot) => {
      let product = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProductData(product);
    });
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <Container className="row m-5 justify-content-center">
      {productData.map((item) => (
        <Product
        category={item.product?.obj?.category}
          title={item.product?.obj?.name}
          rating={item.product?.obj?.star}
          price={item.product?.obj?.price}
          image={item.product?.obj?.img}
          id={item.product?.obj?.key}
          key={item.product?.obj?.key}
          pdID={item.id}
        />
      ))}
    </Container>
  );
};

export default CategoryPage;

const Container = styled.div`
  // max-width: 80%;
  // display: grid;
  // place-items: center;
  // grid-template-columns: auto auto;
`;
