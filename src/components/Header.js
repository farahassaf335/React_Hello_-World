import React from "react";
import { useHeader } from "../store/HeaderContext";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useCartStore from "../store/useCartStore";
import { useQuery } from "@tanstack/react-query";
import { SearchService } from "../services/searchService";
import {
  faUser, faHeart, faShoppingBag, faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF, faTwitter, faInstagram, faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import CartBadge from './CartBadge';
const Header = () => {
  const { state, dispatch } = useHeader();
  const reduxDispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser.username); 
    }
  }, []);


  const handleAuth = () => {
    if (isLoggedIn) {
      reduxDispatch(logout()); 
      localStorage.removeItem("user"); 
      setIsLoggedIn(false);
      setUsername("");
      navigate("/"); 
    } else {
    
      navigate("/login");
    }
  };


 const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName = storedUser?.username;



  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      alert("يرجى تسجيل الدخول أولاً");
    }
  };
  const { searchQuery, showCurrency, showLanguage, showResults } = state;

  const {
    data,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: () => SearchService.searchProduct(searchQuery),
    enabled: false, 
  });

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      refetch();
      dispatch({ type: "SHOW_RESULTS" });
    }
  };

  const handleCloseResults = () => {
    dispatch({ type: "HIDE_RESULTS" });
  };

  return (
    <div className="main-header">
      <header>
        {showResults && (
          <div className="search-overlay">
            <button className="close-btn" onClick={handleCloseResults}>×</button>
            <div className="search-results">
              {isFetching && <p>Loading...</p>}
              {error && <p>{error.message}</p>}
              {!isFetching && data?.data?.products?.length === 0 && <p>No results found.</p>}
              {!isFetching &&
                data?.data?.products.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <p><strong>${product.price}</strong> | ⭐ {product.rating}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className="header-section top-bar">
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
               {isLoggedIn && <span>HI , {username}</span>}
           &nbsp;&nbsp;&nbsp; {" "}FREE SHIPPING WEEK ORDER - 55$
          </div>

          <div className="right-options">
            <div className="option" onClick={() => dispatch({ type: "TOGGLE_CURRENCY" })}>
              USD$ <span className="arrow">▼</span>
              {showCurrency && (
                <div className="dropdown">
                  <div>USD$</div>
                  <div>EUR</div>
                  <div>GBP</div>
                </div>
              )}
            </div>

            <div className="option" onClick={() => dispatch({ type: "TOGGLE_LANGUAGE" })}>
              ENGLISH <span className="arrow">▼</span>
              {showLanguage && (
                <div className="dropdown">
                  <div>ENGLISH</div>
                  <div>AR</div>
                  <div>FR</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="header-section middle-bar">
          <h2>Anon</h2>
          <div className="center-search">
            <input
              type="text"
              placeholder="Enter your product name..."
              value={searchQuery}
              onChange={(e) =>
                dispatch({ type: "SET_QUERY", payload: e.target.value })
              }
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              onClick={handleSearch}
            />
          </div>

          <div className="right-icons">
       <button 
  onClick={handleAuth} 
  className={`auth-btn ${isLoggedIn ? "logout" : ""}`}
>
  {isLoggedIn ? "Logout" : "Login"}
</button>

<a className="icon-with-badge" href="/user"><FontAwesomeIcon icon={faUser} /></a>
            <a className="icon-with-badge" href="/likes"><FontAwesomeIcon icon={faHeart} /><span className="badge">0</span></a>
<a
          className="icon-with-badge"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleCartClick();
          }}
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="badge">    <CartBadge userKey={`cart_user_${userName}`} />

</span>
        </a>
                   
        </div>
        </div>

        <div className="header-section bottom-bar">
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
  );
};

export default Header;
