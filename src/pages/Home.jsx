import React from "react";
import DealOfTheDay from "../components/DealOfTheDay";

import Header from "../components/Header";

import CategoryNavigation from "../components/CategoryNavigation";
import BestSellers from "../components/BestSellers";
import ProductSections from "../components/ProductSections";
import MainCategories from "../components/MainCategories";
import NewProducts from "../components/NewProducts";
import Carousel from '../components/Carousel';
import { HeaderProvider } from "../store/HeaderContext";
import ServicesAndBlogSection from '../components/ServicesAndBlogSection';

const Home = () => (
  <div className="">
    <HeaderProvider>
      <Header />
    <main>
      <section className="container">
          <Carousel />
      </section>
      <MainCategories />

<div className="page-layout ">
  <aside className="categories">

        <CategoryNavigation />            
<BestSellers /> 

      </aside>
  <main className="main-content">
    <ProductSections />

    <div className="deal-section-wrapper container">
      <h2 className="deal-title">Deal Of The Day</h2>
      <DealOfTheDay />
    </div>
    
        <NewProducts />
 
  <ServicesAndBlogSection />
 </main>
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
        </HeaderProvider>

  </div>
);

export default Home;







