import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Subscriptions</Link>
        <Link to="/price-tags">Price tags</Link>
        <Link to="/timesheet">Time Sheet</Link>
        <Link to="/holds">Holds</Link>
        <Link to="/flyer">Flyers</Link>
        <Link to="/yelp">Yelp</Link>
      </nav>
    </header>
  );
};

export default Navbar;
