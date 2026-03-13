import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import iphone from "./assets/iphone-c.jfif";
import honda from "./assets/hondas.jpg";
import dell from "./assets/dell.jfif";
import bike from "./assets/bike.avif";
import led from "./assets/led.webp";
import sofa from "./assets/sofa.jfif";
import watch from "./assets/watch.webp";

import "./App.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "iPhone 12 Pro",
      price: "Rs 180,000",
      location: "Lahore",
      image: iphone,
      description: "Apple iPhone 12 Pro in excellent condition.",
    },
    {
      id: 2,
      title: "Honda Civic 2020",
      price: "Rs 4,500,000",
      location: "Karachi",
      image: honda,
      description: "Honda Civic 2020 model, family used car.",
    },
    {
      id: 3,
      title: "Dell Laptop",
      price: "Rs 80,000",
      location: "Islamabad",
      image: dell,
      description: "Dell Core i5 laptop with 8GB RAM.",
    },
    {
      id: 4,
      title: "Yamaha Bike",
      price: "Rs 150,000",
      location: "Faisalabad",
      image: bike,
      description: "Yamaha bike in good condition.",
    },
    {
      id: 5,
      title: "Smart LED TV",
      price: "Rs 55,000",
      location: "Rawalpindi",
      image: led,
      description: "Smart LED TV 42 inch with warranty.",
    },
    {
      id: 6,
      title: "Sofa Set",
      price: "Rs 70,000",
      location: "Multan",
      image: sofa,
      description: "7 seater sofa set in new condition.",
    },
    {
      id: 7,
      title: "Watch",
      price: "Rs 2500",
      location: "Sahiwal",
      image: watch,
      description: "Stylish wrist watch for men.",
    },
  ];

    const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="detail-page">
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} className="detail-img" />

      <h2 className="price">{product.price}</h2>
      <p className="location">📍 {product.location}</p>

      <p className="desc">{product.description}</p>

      <button
        className="buy-btn"
        onClick={() => navigate(`/buy/${product.id}`)}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetail;
