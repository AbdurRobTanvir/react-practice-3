import React from "react";

const CardFunction = ({ product, setBlogDetails }) => {
  
  return (
    <div className="card" onClick={() => setBlogDetails(product)}>
      <div className="card-body">
        <img className="card-image" src={product.image} alt="card img" />
        <div className="card-details">
          <div className="card-caption card-color-text ">{product.category}</div>
          <div className="card-title">{product.title}</div>
          <div className="card-description">{product.description}</div>
          <div className="card-footer clearfix">
            <div className="card-author card-color-text ">Price: {product.price}$</div>
            <div className="card-publish-date card-color-text ">
              Rating: {product.rating.rate}/5({product.rating.count})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFunction;
