import React from "react";
import { Link, useNavigate } from "react-router-dom";

import iphone from "./assets/iphone-c.jfif";
import honda from "./assets/hondas.jpg";
import dell from "./assets/dell.jfif";
import bike from "./assets/bike.avif";
import led from "./assets/led.webp";
import sofa from "./assets/sofa.jfif";
import watch from "./assets/watch.webp";

import "./App.css";

function Home() {
  // Logout Navigation
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "iPhone 12 Pro",
      price: "Rs 180,000",
      location: "Lahore",
      image: iphone,
    },
    {
      id: 2,
      title: "Honda Civic 2020",
      price: "Rs 4,500,000",
      location: "Karachi",
      image: honda,
    },
    {
      id: 3,
      title: "Dell Laptop",
      price: "Rs 80,000",
      location: "Islamabad",
      image: dell,
    },
    {
      id: 4,
      title: "Yamaha Bike",
      price: "Rs 150,000",
      location: "Faisalabad",
      image: bike,
    },
    {
      id: 5,
      title: "Smart LED TV",
      price: "Rs 55,000",
      location: "Rawalpindi",
      image: led,
    },
    {
      id: 6,
      title: "Sofa Set",
      price: "Rs 70,000",
      location: "Multan",
      image: sofa,
    },
    {
      id: 7,
      title: "Watch",
      price: "Rs 2500",
      location: "Sahiwal",
      image: watch,
    },
  ];

  return (
    <div>
      {/*  Navbar */}
      <nav className="navbar">
        <h2 className="logo">OLX Clone</h2>

        {/* Logout Button */}
        <button className="sell-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </nav>

      {/* Banner */}
      <section className="banner">
        <h1>Sell Faster, Buy Smarter</h1>
        <p>Buy and Sell Anything in Pakistan</p>
      </section>

      {/* Products */}
      <section className="products">
        <h2>Fresh Recommendations</h2>

        <div className="grid">
          {products.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="card-link"
            >
              <div className="card">
                <img src={item.image} alt={item.title} />

                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <p className="location">{item.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
