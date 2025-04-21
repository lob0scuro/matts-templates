import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Subscriptions</Link>
        <Link to="/price-tags">Price tags</Link>
      </nav>
    </header>
  );
};

export default Navbar;
