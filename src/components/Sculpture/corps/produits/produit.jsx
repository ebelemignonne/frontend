import React from "react";

function Product(props) {
  const { name, price, image, description } = props.product;

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-price">${price}</div>
        <button className="btn btn-outline-success">Passer la commande</button>
      </div>
    </div>
  );
}

export default Product;
