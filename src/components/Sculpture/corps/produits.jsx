import React from "react";
import Product from "./produits/produit";
// import Dev from '../../images/Dev'






function Products() {
  const products = [
    {
      id: 1,
      name: "Harpe de grande taille",
      price: 500,
      image: "https://unsplash.com/fr/photos/kHsjbQGBVag",
      description: "Une harpe sacree grand model",
    },
    {
      id: 2,
      name: "Harpe de taille moyenne",
      price: 250,
      image: "https://via.placeholder.com/150",
      description: "Une harpe sacree de taille moyenne.",
    },
    {
      id: 3,
      name: "Petite harpe sacree",
      price: 100,
      image: "https://via.placeholder.com/150",
      description: "generalement appelee Okambo Ngoma.",
    },
  ];

  return (
    <section className="section products-section">
      <div className="container">
        <h2>Nos produits</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
