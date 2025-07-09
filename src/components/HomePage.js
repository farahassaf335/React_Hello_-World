import React, { useState } from "react";
import "./HomePage.css";
import Header from "./Header"; 

const HomePage = () => {


  return (
    <>
           <Header />


      <main>
        <section className="hero-section container">
          <div className="hero-left">
            <h1 className="hero-title">
              Trending Accessories<br />
              <span>MODERN SUNGLASSES</span>
            </h1>
            <p className="hero-sub">Starting at $15.00</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="hero-image">
            <img src={process.env.PUBLIC_URL + "/image/photo1.jpg"} alt="Modern Sunglasses" />
          </div>
        </section>

        <section className="categories-section container">
          <aside className="sidebar">
            <h3>Category</h3>
            <ul>
              <li>Clothes</li>
              <li>Footwear</li>
              <li>Jewelry</li>
              <li>Cosmetics</li>
              <li>Gadgets</li>
            </ul>
          </aside>

          <div className="main-content">
            <div className="product-tabs">
              <button className="tab active">New Arrivals</button>
              <button className="tab">Trending</button>
              <button className="tab">Top Rated</button>
            </div>

            <div className="product-grid">
              <div className="product-card">
                <img src={process.env.PUBLIC_URL + "/image/photo2.jpg"} alt="Product" />
                <div className="product-info">
                  <h4>Product Name</h4>
                  <div className="price">$49.00 <span className="old-price">$59.00</span></div>
                  <div className="rating">★★★★★ 4.8</div>
                </div>
                <div className="quick-actions">
                  <button className="icon-btn">♡</button>
                  <button className="icon-btn">🛒</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-columns">
            <div>
              <h5>Our Company</h5>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li>Email: info@anon.com</li>
                <li>Phone: +123456789</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Anon. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
