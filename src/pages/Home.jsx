import React from "react";
import DealOfTheDay from "../components/DealOfTheDay";
import "../styles/CategoryNavigation.css";
import "../styles/Header.css";
import Header from "../components/Header";

import CategoryNavigation from "../components/CategoryNavigation";
import BestSellers from "../components/BestSellers";
import ProductSections from "../components/ProductSections";
import MainCategories from "../components/MainCategories";
import NewProducts from "../components/NewProducts";
import Carousel from '../components/Carousel';

const Home = () => (
  <div className="page-layout">
    <Header />

    <aside className="sidebar">
      <CategoryNavigation />
      <BestSellers />
    </aside>

    <main>
      <section className="hero-section container">
      
          <Carousel />
     
      </section>
      <ProductSections />
      <MainCategories />

      <section className="categories-section container">
        <div className="main-content">
          <div className="product-tabs">
            <button className="tab active">New Arrivals</button>
            <button className="tab">Trending</button>
            <button className="tab">Top Rated</button>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <img src="/image/photo2.jpg" alt="Product" />
              <div className="product-info">
                <h4>Product Name</h4>
                <div className="price">
                  <span className="current-price">$49.00</span>
                  <span className="old-price">$59.00</span>
                </div>
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

      <div className="deal-section-wrapper container">
        <h2 className="deal-title">Deal Of The Day</h2>
        <DealOfTheDay />
      </div>

      <div className="container">
        <NewProducts />
      </div>
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
  </div>
);

export default Home;







