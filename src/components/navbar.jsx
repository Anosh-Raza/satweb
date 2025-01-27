import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "../assets/images/logo-white.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo; // Path to your logo
    img.onload = () => setImageAvailable(true);
    img.onerror = () => setImageAvailable(false);
  }, []);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="text-white bg-gradient-logo"
      style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.2)" }}
    >
      <div className="container lg:mx-auto px-5 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="logo flex items-center">
          <Link to="/" onClick={handleLinkClick}>
            {imageAvailable ? (
              <img
                src={logo}
                alt="SAT Americana Logo"
                className="h-16 w-auto mr-2"
              />
            ) : (
              <span className="text-xl font-bold">SAT Americana</span>
            )}
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} text-2xl`}></i>
        </div>

        {/* Navigation Links */}
        <div
          className={`links lg:flex lg:items-center ${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full lg:static lg:w-auto bg-logo-dark-blue lg:bg-transparent z-50`}
        >
          <ul className="nav-item flex flex-col lg:flex-row lg:space-x-4 text-center lg:text-left text-white">
            <li className="py-2 lg:py-0">
              <Link
                to="/"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/about-us"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="relative group">
              {/* Services Dropdown */}
              <button className="hover:text-gray-300">
                <Link
                  to="/services"
                  className="hover:text-gray-300"
                  onClick={handleLinkClick}
                >
                  E-Commerce Services
                </Link>
              </button>
              <ul className="absolute hidden group-hover:block bg-logo-medium-blue-1 text-white mt-2 p-2 rounded-xl shadow-lg shadow-theme-white z-10 w-[250px]">
                <li className="py-2">
                  <Link
                    to="/amazon-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Shopify  Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/logo-branding-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Etsy Seller Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/web-development-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    eBay Seller Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/seo-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Amazon Seller Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              {/* Services Dropdown */}
              <button className="hover:text-gray-300">
                <Link
                  to="/services"
                  className="hover:text-gray-300"
                  onClick={handleLinkClick}
                >
                  Digital Marketing Services 
                </Link>
              </button>
              <ul className="absolute hidden group-hover:block bg-logo-medium-blue-1 text-white mt-2 p-2 rounded-xl shadow-lg shadow-theme-white z-10 w-[250px]">
                <li className="py-2">
                  <Link
                    to="/amazon-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Platform Advertising
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/logo-branding-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Social Media Marketing for E-Commerce
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/web-development-services"
                    className="hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    Email Marketing for E-Commerce
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="py-2 lg:py-0">
              <Link
                to="/portfolio"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Portfolio
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/packages"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Packages
              </Link>
            </li> */}
            <li className="py-2 lg:py-0">
              <Link
                to="/blogs"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Blogs
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/contact"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="cta hidden lg:block">
          <Button
            placeholder="Request A Quote"
            url="/signin"
            bgColor="bg-transparent"
            borderRadius="rounded"
            extraClasses="hover:bg-gray-300 px-4 py-2"
            borderBtn="border-2"
            textColor="text-white"
            textColorHover="text-logo-purple"
            fontWeight="font-bold"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
