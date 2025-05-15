import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const tags = ['apple', 'watch'];
const ProductPage = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Products</h1>
      <div className="row justify-content-center my-2">
        <CardProduct>
          {/* Implementasi nested component */}
          <CardProduct.header source="../../public/images/jam.jpg"></CardProduct.header>
          <CardProduct.body title="Apple Watch" price="300.00" tags={ tags }></CardProduct.body>
        </CardProduct>
      </div>
    </div>
  )
};

export default ProductPage;