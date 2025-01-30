import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "../assets/images/logo-white.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
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

  // Function to handle Services hover
  const handleServicesHover = (isHovered) => {
    if (isHovered) {
      setIsServicesHovered(true);
    } else {
      // Delay closing the mega menu by 300ms
      setTimeout(() => {
        setIsServicesHovered(false);
      }, 300);
    }
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
            <li
              className="relative group"
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              {/* Services Mega Menu */}
              <button className="hover:text-gray-300">Services</button>
              <div
                className={`absolute ${
                  isServicesHovered ? "block" : "hidden"
                } bg-logo-medium-blue-1 text-white mt-2 p-4 rounded-xl shadow-lg shadow-theme-white z-10 w-[600px] transition-opacity duration-300 ${
                  isServicesHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">Ecommerce Services</h3>
                    <ul>
                      <li className="py-2">
                        <Link
                          to="/shopify-services"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Shopify Services
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/etsy-services"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Etsy
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/ebay-services"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Ebay
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/amazon-services"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Amazon
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Digital Marketing</h3>
                    <ul>
                      <li className="py-2">
                        <Link
                          to="/platform-adv"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Platform Advertising
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/social-media"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Social Media
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/email-marketing"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          Email Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">SEO</h3>
                    <ul>
                      <li className="py-2">
                        <Link
                          to="/seo"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          SEO Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Web Development</h3>
                    <ul>
                      <li className="py-2">
                        <Link
                          to="/wordpress"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          WordPress
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/js-dev"
                          className="hover:text-gray-300"
                          onClick={handleLinkClick}
                        >
                          JS Dev
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/blogs"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/about-us"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/contact-us"
                className="hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Contact Us
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