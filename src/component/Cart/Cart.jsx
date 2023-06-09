import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

const Cart = ({ cart }) => {
   let totalPrice = 0;
   let totalShippingCost = 0;
   let quantity = 0;
   cart.map((product) => {
      //   console.log(product);
      quantity += product.quantity;
      totalPrice = totalPrice + product.price * quantity;
      //   console.log(item);
      totalShippingCost = totalShippingCost + product.shipping * quantity;
   });

   let tax = (totalPrice * 7) / 100;
   return (
      <>
         <h3>Order Summery</h3>
         <div className="cart-info">
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${(totalPrice + totalShippingCost + tax).toFixed(2)}</h4>
         </div>
         <div>
            <button className="clear-cart">
               Clear Cart <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button className="review-product">
               Review Product <FontAwesomeIcon style={{ fontSize: "26px" }} icon={faArrowRight} />
            </button>
         </div>
      </>
   );
};

export default Cart;
