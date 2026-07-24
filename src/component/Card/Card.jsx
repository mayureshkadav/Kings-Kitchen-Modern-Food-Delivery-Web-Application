import React from "react";
import "./Card.css";
import LazyImage from "./LazyImage";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const Card = ({ cardData, addToCart, isLoading }) => {
  if (isLoading) {
    return (
      <div className="cardContainer">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="cardContainer">
      {cardData.length === 0 ? (
        <h2>No Item Found</h2>
      ) : (
        cardData.map((item) => (
          <div className="card" key={item.id}>
            <LazyImage src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              doloremque!
            </p>

            <p className="price">Price: ₹{item.price}</p>

            <button className="btn1" onClick={() => addToCart(item)}>
              Add to Cart
            </button>

            <button className="btn2">Buy Now</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
