import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from "./Card";
import CardDetails from "./CardDetails";

const FetchingApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=6')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  const [blogDetails, setBlogDetails] = useState();

  return (
    <>
      {
        !blogDetails &&
        <div className="container">
          <div className="card-wrapper clearfix">
            {
              products.map((product, id) => (
                <Card
                  key={id}
                  product={product}
                  setBlogDetails={setBlogDetails}
                />
              ))
            }
          </div>
        </div>
      }

      {
        blogDetails &&
        <div className="container">
          <CardDetails
            product={blogDetails}
            setBlogDetails={setBlogDetails}
          />
        </div>
      }
    </>
  );
}

export default FetchingApi
