import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
};

const items = [
  <div className="item">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png" onDragStart={handleDragStart} alt="" />
  </div>,
  <div className="item">
  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg" onDragStart={handleDragStart} alt=""/></div>,
  <div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" onDragStart={handleDragStart} alt=""/></div>,
  <div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg" onDragStart={handleDragStart} alt=""/></div>,
  <div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" onDragStart={handleDragStart} alt=""/></div>,
  <div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" onDragStart={handleDragStart} alt=""/></div>,
];

export const Gallery = () => {
  return (
      <>
      <h4 className="pl-3">Discover Amazon: </h4>
    <AliceCarousel mouseTracking items={items} responsive={responsive}/>
  </>);
}