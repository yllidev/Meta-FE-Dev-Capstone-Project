import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restaurantfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon Restaurant</h2>
          <h3>At the heart of New York City</h3>
          <p>
            We are a family owned Mexican restaurant, focused on
            traditional family recipes from southern Mexico.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Book a Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
