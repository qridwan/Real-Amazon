import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../Home/Firebase";

const Details = () => {
  const { category, id } = useParams();
  const [pdDetails, setPdDetails] = useState({});

  const dbFolders = () => {
    if (category === "laptop") {
      let collectionName = "Laptops";
      return collectionName;
    }
    if (category === "camera") {
      let collectionName = "Cameras";
      return collectionName;
    } else {
      let collectionName = "Mobiles";
      return collectionName;
    }
  };

  useEffect(() => {
    const dbCollection = dbFolders();
    //for getting definite db collection folder
    const collection = db.collection(dbCollection).doc(id);
    collection
      .get()
      .then((doc) => {
        if (doc.exists) {
          const product = doc.data()?.obj;
          setPdDetails(product);
          console.log("Document data:", product);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const { seller, name, img, price, star, stock, wholePrice, url } = pdDetails;
  console.log(
    "🚀 ~ file: Details.js ~ line 55 ~ Details ~ pdDetails",
    pdDetails
  );

  return (
    <Container>
      <Title>{name}</Title>
      <Seller>Seller: {seller}</Seller>
      <Image src={img} />
      <Star>
        {" "}
        {Array(star)
          .fill()
          .map(() => (
            <span>⭐</span>
          ))}{" "}
      </Star>
      <Features>
        {pdDetails.features?.map((line, index) => (
          <li key={index}>
            {line.description} : {line.value}
          </li>
        ))}
      </Features>
      <Price>Retail Price: ${price} <br/> Whole Price: ${wholePrice}</Price>
      <Stock>{stock && `In Stock : ${stock}`} 
      </Stock>
      <AmazonSite>Buy From Real Site</AmazonSite>

    </Container>
  );
};

export default Details;

const Container = styled.div``;
const Title = styled.div``;
const Seller = styled.div``;
const Image = styled.img``;
const Features = styled.ul``;
const Star = styled.div``;
const Price = styled.div``;
const Stock = styled.div``;
const AmazonSite = styled.button``;