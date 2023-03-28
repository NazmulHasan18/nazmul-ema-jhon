import React from "react";
import "./Product.css";

const Product = (props) => {
   const { img, name, price, quantity, seller, ratings } = props.product;
   console.log(props.product);
   return (
      <div className="product">
         <img src={img} alt="" />
         <div className="title-container">
            <h6 className="name">{name}</h6>
            <h5 className="price">Price: ${price}</h5>
         </div>
         <p className="seller">Manufacture: {seller}</p>
         <p className="ratings">Ratings: {ratings} star</p>

         <button className="btn-cart">Add To Cart</button>
      </div>
   );
};

export default Product;
