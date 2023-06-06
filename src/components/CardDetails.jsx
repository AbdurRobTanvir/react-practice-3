import React from "react";

const SingleCard = ({ product, setBlogDetails }) => {
  return (
    <div className="single-card">
      <div className="single-card-title">{product.title}</div>
      <img src={product.image} alt=" single card "></img>
      <div className="single-card-details">
        <div className="single-card-description"> {product.description}</div>
        <div>Catagory: {product.category}</div>
        <div>Price: {product.price}</div>
        <div>Rating: {product.rating.rate}/5({product.rating.count})</div>
      </div>
      <button
        className="single-card-btn"
        onClick={() => {
          setBlogDetails();
        }}
      >
        Previous Page
      </button>
    </div>
  );
};

export default SingleCard;
