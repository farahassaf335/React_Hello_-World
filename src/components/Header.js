import React, { useState } from "react";
import "../pages/Home";
import "../styles/Header.css";
import useProductSearch from "../hooks/useProductSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, faHeart, faShoppingBag, faSearch 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, faTwitter, faInstagram, faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const {
    searchResults,
    searchProducts,
    clearResults,
    loading,
    error,
  } = useProductSearch();

  const toggleCurrency = () => {
    setShowCurrency((prev) => !prev);
    setShowLanguage(false);
  };

  const toggleLanguage = () => {
    setShowLanguage((prev) => !prev);
    setShowCurrency(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim().length > 2) {
      searchProducts(searchQuery);
      setShowResults(true);
    }
  };

  const handleCloseResults = () => {
    clearResults();
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div className="main-header">
      <div className="header-content">
        <header className="custom-header">
          {showResults && (
            <div className="search-overlay">
              <button className="close-btn" onClick={handleCloseResults}>
                ×
              </button>
              <div className="search-results">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && searchResults.length === 0 && !error && (
                  <p>No results found.</p>
                )}
                {!loading &&
                  searchResults.map((product) => (
                    <div key={product.id} className="product-item">
                      <img src={product.thumbnail} alt={product.title} />
                      <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>
                          <strong>${product.price}</strong> | ⭐ {product.rating}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="header-section h1 top-bar">
            <div className="left-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

            <div className="center-title">
              FREE SHIPPING WEEK ORDER - 55$
            </div>

            <div className="right-options">
              <div className="option" onClick={toggleCurrency}>
                USD <span className="arrow">▼</span>
                {showCurrency && (
                  <div className="dropdown">
                    <div>USD</div>
                    <div>EUR</div>
                    <div>GBP</div>
                  </div>
                )}
              </div>

              <div className="option" onClick={toggleLanguage}>
                EN <span className="arrow">▼</span>
                {showLanguage && (
                  <div className="dropdown">
                    <div>EN</div>
                    <div>AR</div>
                    <div>FR</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="header-section h2 middle-bar">
            <div className="left-title">
              <h2>Anon</h2>
            </div>

            <div className="center-search">
              <input
                type="text"
                placeholder="Enter your product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                onClick={handleSearch}
              />
            </div>

            <div className="right-icons">
              <a className="icon-with-badge" href="/user" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUser} />
              </a>

              <a className="icon-with-badge" href="/likes" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faHeart} />
                <span className="badge">0</span>
              </a>

              <a className="icon-with-badge" href="/cart" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="badge">0</span>
              </a>
            </div>
          </div>

          <div className="divider"></div>

          <div className="header-section h3">
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="/categories">Categories</a>
              <a href="/mens">Men's</a>
              <a href="/womens">Women's</a>
              <a href="/jewelry">Jewelry</a>
              <a href="/perfume">Perfume</a>
              <a href="/blog">Blog</a>
              <a href="/offers">Hot Offers</a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

