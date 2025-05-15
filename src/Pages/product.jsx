import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    nama: "Smartphone Galaxy X",
    tags: ["elektronik", "smartphone", "android"],
    harga: 4500000
  },
  {
    id: 2,
    nama: "Laptop ProBook 14",
    tags: ["elektronik", "laptop", "intel"],
    harga: 8500000
  },
  {
    id: 3,
    nama: "Smart TV 50 Inch",
    tags: ["elektronik", "tv", "smart"],
    harga: 6200000
  },
  {
    id: 4,
    nama: "Headphone Wireless",
    tags: ["elektronik", "audio", "wireless"],
    harga: 750000
  },
  {
    id: 5,
    nama: "Kamera Mirrorless Z1",
    tags: ["elektronik", "kamera", "mirrorless"],
    harga: 9500000
  }
];

const ProductPage = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Products</h1>
      <div className="row justify-content-center my-2">
        {
          products.map((product) => (
            <CardProduct key={ product.id }>
              {/* Implementasi nested component */}
              { product.id % 2 === 0 ? (
                <CardProduct.header source="../../public/images/jam.jpg"></CardProduct.header>
                ) : (
                <CardProduct.header source="../../public/images/laptop.jpg"></CardProduct.header>
              ) }
              <CardProduct.body title={ product.nama } price={ product.harga } tags={ product.tags }></CardProduct.body>
              <p>{ product.tags }</p>
            </CardProduct>
          )) 
        }
      </div>
    </div>
  )
};

export default ProductPage;