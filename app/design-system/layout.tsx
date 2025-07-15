"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Guide", path: "/design-system/guide" },
  { name: "Colors", path: "/design-system/colors" },
  { name: "Typography", path: "/design-system/typography" },
  { name: "Buttons", path: "/design-system/buttons" },
  { name: "Tabs", path: "/design-system/tabs" },
  { name: "Effects", path: "/design-system/effects" },
  { name: "FAQ", path: "/design-system/faq" },
  { name: "Icons", path: "/design-system/icons" },
  { name: "Avatar", path: "/design-system/avatar" },
  { name: "Badge", path: "/design-system/badge" },
  { name: "Breadcrumbs", path: "/design-system/breadcrumbs" },
  { name: "Card", path: "/design-system/card" },
  { name: "Chip", path: "/design-system/chip" },
  { name: "Dialog", path: "/design-system/dialog" },
  { name: "Drawer", path: "/design-system/drawer" },
  { name: "Menu", path: "/design-system/menu" },
  { name: "Pagination", path: "/design-system/pagination" },
  { name: "Progress", path: "/design-system/progress" },
  { name: "Snackbar", path: "/design-system/snackbar" },
  { name: "Tooltip", path: "/design-system/tooltip" },
];

export default function DesignSistemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div style={{ minHeight: "100vh", background: "#fafbfc" }}>
      <nav className="design-system-nav">
        <div className="design-system-nav-dropdown" ref={dropdownRef}>
          <button
            className="design-system-nav-link design-system-nav-more"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((open) => !open)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setDropdownOpen(false);
            }}
            type="button"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div className="design-system-nav-dropdown-menu" role="menu">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} passHref legacyBehavior>
                  <a className="design-system-nav-link design-system-nav-link-dropdown" role="menuitem" tabIndex={0} onClick={() => setDropdownOpen(false)}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
