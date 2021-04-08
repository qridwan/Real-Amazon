import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../Home/Firebase";
import './Details.css'

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

  return (
    <>
     <div class="product-card">
    <div class="product-image">
    <img src={img} alt="" />
  </div>
  <div class="product-details">
    <h1>{name}</h1>
    <small>Seller: {seller}</small>
    <p>
      {pdDetails.features?.map((line, index) => (
            <li key={index}>
              {line.description} : {line.value}
            </li>
          ))}</p>
          <p>{stock && `In Stock : ${stock}`} <br/>
          {Array(star)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
          <hr></hr></p>
          <p>Retail Price: ${price} <br /> Whole Price: ${wholePrice}</p>
    <button type="button" class="btn"><a href={url} target="_blank" rel="noopener noreferrer"title="amazon-link"> Buy Now</a></button>
  </div>
</div>


    </>
  );
};

export default Details;


