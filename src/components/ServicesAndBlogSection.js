import React from "react";

const uniqueServices = [
  { id: 1, title: "Worldwide Delivery", subtitle: "For Order Over $100", icon: "🚢" },
  { id: 2, title: "Next Day Delivery", subtitle: "UK Orders Only", icon: "🚀" },
  { id: 3, title: "Best Online Support", subtitle: "Hours: 8AM - 11PM", icon: "📞" },
  { id: 4, title: "Return Policy", subtitle: "Easy & Free Return", icon: "↩️" },
  { id: 5, title: "30% Money Back", subtitle: "For Order Over $100", icon: "💰" },
];

const uniquePosts = [
  {
    id: 1,
    category: "Beauty",
    title: "Beauty Trends: How to Win the Pickup Battle.",
    meta: "By Ms. Joma • Feb 10, 2022",
    img:  '/image/makeup.jfif',
  },
  {
    id: 2,
    category: "Shoes",
    title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
    meta: "By Mr. Selsa • Feb 10, 2022",
    img:  '/image/Shoes.webp',
  },
  {
    id: 3,
    category: "Electronics",
    title: "Curbside fashion Trends: How to Win the Pickup Battle.",
    meta: "By Mr. Pawar • Mar 15, 2022",
    img:  '/image/phone.webp',
  },
];

export default function UniqueServicesBlog() {
  return (
    <div className="wrnx-services-blog-uniq">
     
      <div className="wrnx-image-container">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Summer Collection"
          className="wrnx-main-image"
        />
        <div className="wrnx-overlay-box">
          <span className="wrnx-discount-tag">25% DISCOUNT</span>
          <h2 className="wrnx-collection-title">Summer Collection</h2>
          <p className="wrnx-starting-price">Starting @ $10</p>
          <button className="wrnx-shop-btn">SHOP NOW</button>
        </div>
      </div>

      
      <div className="wrnx-right-column">
       
        <section className="wrnx-services-box">
          <h3 className="wrnx-services-title">Our Services</h3>
          <ul className="wrnx-services-list">
            {uniqueServices.map((service) => (
              <li key={service.id} className="wrnx-service-item">
                <span className="wrnx-service-icon">{service.icon}</span>
                <div>
                  <strong className="wrnx-service-name">{service.title}</strong>
                  <p className="wrnx-service-subtitle">{service.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

      
      <section className="wrnx-posts-row">
          {uniquePosts.map((post) => (
            <article key={post.id} className="wrnx-post-card">
              <img src={post.img} alt={post.title} className="wrnx-post-img" />
              <div className="wrnx-post-info">
                <span className="wrnx-post-category">{post.category}</span>
                <h4 className="wrnx-post-title">{post.title}</h4>
                <p className="wrnx-post-meta">{post.meta}</p>
              </div>
            </article>
          ))}
        </section>  
      </div>
      
    </div>
  );
}
