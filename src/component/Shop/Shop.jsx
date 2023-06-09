import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      fetch("products.json")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   const [cart, setCart] = useState([]);

   const handelAddToCart = (product) => {
      let newCart = [];
      const existing = cart.find((p) => p.id === product.id);
      // console.log(existing);
      if (!existing) {
         product.quantity = 1;
         // console.log(product);
         newCart = [...cart, product];
         // setCart(newCart);
      } else {
         existing.quantity += 1;
         const remaining = cart.filter((p) => p.id !== product.id);
         newCart = [...remaining, existing];
         // console.log(newCart);
      }
      setCart(newCart);
      addToDb(product.id);
   };
   useEffect(() => {
      const getCart = getShoppingCart();
      const storedCart = [];
      for (const id in getCart) {
         const addedProduct = products.find((product) => product.id === id);
         if (addedProduct) {
            const quantity = getCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
         }
         // setCart([...cart, addedProduct]);
      }
      setCart(storedCart);
   }, [products]);

   return (
      <div className="shop-container">
         <div className="products-container">
            {products.map((product) => (
               <Product key={product.id} product={product} handelAddToCart={handelAddToCart}></Product>
            ))}
         </div>
         <div className="cart-container">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;
