import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-primary font-bold"
      : "text-foreground/80 hover:text-primary";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Platform", path: "/products" },
    { name: "Events", path: "/events" },
    { name: "Insights", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logoedn.svg"
            alt="Energy Data Technology"
            className="h-12 w-12"
          />
          <span className="hidden text-sm font-black leading-tight text-white sm:block">
            Energy Data
            <span className="block text-primary">Technology</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${isActive(
                link.path
              )}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-background px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(
                  link.path
                )}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
