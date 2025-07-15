"use client";

import React, { useState } from "react";
import { Button } from "./Button";

export interface NavigationProps {
  className?: string;
}

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NexcentLogo = () => (
  <a href="/" className="navigation__logo">
    <img src="/images/Logo.png" alt="Logo" className="navigation__logo-img" style={{ height: 40 }} />
  </a>
);

export function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Design System", href: "/design-system" },
    { label: "Service", href: "#" },
    { label: "Feature", href: "#" },
    { label: "Product", href: "#" },
    { label: "Testimonial", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navigation ${className}`}>
      <div className="navigation__container">
        <NexcentLogo />

        <nav
          className={`navigation__menu ${isMobileMenuOpen ? "navigation__menu--open" : ""}`}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navigation__menu-item"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}

          <div className="navigation__mobile-actions">
            <Button
              type="secondary"
              size="small"
              className="navigation__login-btn"
              href="#"
              onClick={closeMobileMenu}
            >
              Login
            </Button>
            <Button
              type="primary"
              size="small"
              className="navigation__signup-btn"
              href="#"
              onClick={closeMobileMenu}
            >
              Sign up
            </Button>
          </div>
        </nav>

        <div className="navigation__actions">
          <Button
            type="secondary"
            size="small"
            className="navigation__login-btn"
            href="#"
          >
            Login
          </Button>
          <Button
            type="primary"
            size="small"
            className="navigation__signup-btn"
            href="#"
          >
            Sign up
          </Button>
        </div>

        <button
          className="navigation__mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
    </header>
  );
}
