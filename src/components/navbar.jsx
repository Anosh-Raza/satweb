import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "../assets/images/logo-white.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setImageAvailable(true);
    img.onerror = () => setImageAvailable(false);
  }, []);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const handleServicesToggle = (e) => {
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="text-white bg-gradient-logo border-b border-opacity-20 border-white">
      <div className="container mx-auto px-5 flex justify-between items-center py-2">
        <div className="logo flex items-center">
          <Link to="/" onClick={handleLinkClick}>
            {imageAvailable ? (
              <img src={logo} alt="SAT Americana Logo" className="h-16 w-auto mr-2" />
            ) : (
              <span className="text-xl font-bold">SAT Americana</span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} text-2xl`}></i>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-logo-dark-blue text-white z-50 p-5 rounded-lg shadow-lg">
            <ul className="flex flex-col text-left space-y-2">
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li className="relative">
                <button onClick={handleServicesToggle} className="flex justify-between w-full">Services <i className="bi bi-chevron-down ml-2"></i></button>
                {isServicesOpen && (
                  <div className="mt-2 p-2 bg-logo-medium-blue-1 rounded-lg shadow-md">
                    <h3 className="font-bold">Ecommerce Services</h3>
                    <ul className="ml-4">
                      <li><Link to="/shopify-services" onClick={handleLinkClick}>Shopify Services</Link></li>
                      <li><Link to="/etsy-services" onClick={handleLinkClick}>Etsy</Link></li>
                      <li><Link to="/ebay-services" onClick={handleLinkClick}>Ebay</Link></li>
                      <li><Link to="/amazon-services" onClick={handleLinkClick}>Amazon</Link></li>
                    </ul>
                    <h3 className="font-bold">Digital Marketing</h3>
                    <ul className="ml-4">
                      <li><Link to="/shopify-services" onClick={handleLinkClick}>Platform Adv</Link></li>
                      <li><Link to="/etsy-services" onClick={handleLinkClick}>Social Media</Link></li>
                      <li><Link to="/ebay-services" onClick={handleLinkClick}>Email Marketing</Link></li>
                    </ul>
                    <h3 className="font-bold">SEO</h3>
                    <h3 className="font-bold">Web Development</h3>
                    <ul className="ml-4">
                      <li><Link to="/shopify-services" onClick={handleLinkClick}>WordPress</Link></li>
                      <li><Link to="/etsy-services" onClick={handleLinkClick}>JS Dev</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><Link to="/blogs" onClick={handleLinkClick}>Blog</Link></li>
              <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
              <li><Link to="/login" className="text-logo-purple font-bold flex items-center">Login to customer portal <i className="bi bi-box-arrow-in-right ml-2"></i></Link></li>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li className="relative">
              <button onClick={handleServicesToggle} className="hover:text-gray-300">Services <i className="bi bi-chevron-down ml-2"></i></button>
              {isServicesOpen && (
                <div className="absolute left-0 bg-logo-medium-blue-1 text-white mt-2 p-4 rounded-xl shadow-lg w-[600px] z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold mb-2">Ecommerce Services</h3>
                      <ul>
                        <li><Link to="/shopify-services" className="hover:text-gray-300">Shopify Services</Link></li>
                        <li><Link to="/etsy-services" className="hover:text-gray-300">Etsy</Link></li>
                        <li><Link to="/ebay-services" className="hover:text-gray-300">Ebay</Link></li>
                        <li><Link to="/amazon-services" className="hover:text-gray-300">Amazon</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Digital Marketing</h3>
                      <ul>
                        <li><Link to="/platform-adv" className="hover:text-gray-300">Platform Advertising</Link></li>
                        <li><Link to="/social-media" className="hover:text-gray-300">Social Media</Link></li>
                        <li><Link to="/email-marketing" className="hover:text-gray-300">Email Marketing</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">SEO</h3>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Web Development</h3>
                      <ul>
                        <li><Link to="/platform-adv" className="hover:text-gray-300">Wordpress</Link></li>
                        <li><Link to="/social-media" className="hover:text-gray-300">SEO</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/blogs" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        <div className="hidden lg:block">
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
