import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSubscription } from "../context/SubscriptionContext";

function Navbar() {
  const location = useLocation();
  const { plan } = useSubscription();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-dot" />
    SUBFLOW
          </div>

      <div className="navbar__links">
        <Link to="/" className={`navbar__link ${isActive("/") ? "navbar__link--active" : ""}`}>
          Home
        </Link>
        <Link to="/pricing" className={`navbar__link ${isActive("/pricing") ? "navbar__link--active" : ""}`}>
          Pricing
        </Link>
        <Link to="/dashboard" className={`navbar__link ${isActive("/dashboard") ? "navbar__link--active" : ""}`}>
          Dashboard
        </Link>

        {plan && <span className="navbar__plan-badge">{plan}</span>}

        <Link to="/pricing" className="navbar__cta">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;