import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../Home/Firebase";
import Product from "../Product/Product";

const CategoryPage = () => {
const [laptopData, setLaptopData] = useState([]);
const { category } = useParams();
console.log(
"🚀 ~ file: LaptopPage.js ~ line 10 ~ LaptopPage ~ category",
category
);

const getCategoryData = () =>
//getting all the Laptop products from db
db.collection(category).onSnapshot((snapshot) => {
  let laptop = snapshot.docs.map((doc) => ({
    id: doc.id,
    product: doc.data(),
  }));
  setLaptopData(laptop);
});
useEffect(() => {
  getCategoryData();
}, []);
return (
<Container className="row m-5">
  {laptopData.map((item) => (
    //  console.log(item.product?.obj)
    <Product
    className="col-md-4 col-sm-12"
      title={item.product?.obj?.name}
      rating={item.product?.obj?.star}
      price={item.product?.obj?.price}
      image={item.product?.obj?.img}
      id={item.product?.obj?.key}
      key={item.product?.obj?.key}
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
