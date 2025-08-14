import Header from "../components/Header";
import CategoryNavigation, { CategoryProvider } from "../components/CategoryNavigation";
import BestSellers from "../components/BestSellers";
import ProductSections from "../components/ProductSections";
import MainCategories from "../components/MainCategories";
import DealOfTheDay from "../components/DealOfTheDay";
import NewProducts, { ProductsProvider } from "../components/NewProducts";
import Carousel from "../components/Carousel";

const Home = () => (
  <CategoryProvider>
    <ProductsProvider>
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

              <NewProducts />
            </div>
          </section>

          <div className="deal-section-wrapper container">
            <h2 className="deal-title">Deal Of The Day</h2>
            <DealOfTheDay />
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
    </ProductsProvider>
  </CategoryProvider>
);

export default Home;







