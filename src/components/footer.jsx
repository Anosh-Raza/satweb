import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-light-blue text-white py-12">
      <div
        className=""
        style={{
          backgroundColor: "hsla(235, 40%, 17%, 1)",
          backgroundImage:
            "radial-gradient(at 99% 98%, hsla(203, 100%, 50%, 1) 0px, transparent 50%), radial-gradient(at 0% 30%, hsla(275, 100%, 36%, 1) 0px, transparent 50%)",
        }}
      >
        <h2>Sign Up To Get The Latest Digital Trends</h2>
        <div></div>
      </div>

      <div className="container mx-auto flex justify-between pb-12">
        <div className="logoFooter">
          <img src={logo} alt={logo} width={80} />
        </div>
        <div className="w-1/2">
          <p>
            We are a full-service digital solution agency focusing on branding,
            marketing, web design, and development with clients ranging from
            start-ups to enterprises.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Text */}
        <div className="wi_ulborder">
          <h4 className="text-lg font-normal mb-4 uppercase">Main Services</h4>
          <ul className="space-y-2 flex flex-col">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link to="/about-us" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Column 2: Main Menu */}
        <div className="wi_ulborder">
          <h4 className="text-lg font-normal mb-4 uppercase">Development</h4>
          <ul className="space-y-2 flex flex-col">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link to="/about-us" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="wi_ulborder">
          <h4 className="text-lg font-normal mb-4 uppercase">Company</h4>
          <ul className="space-y-2 flex flex-col">
            <Link to="/ecommerce-services" className="hover:text-gray-300">
              Ecommerce
            </Link>
            <Link
              to="/search-engine-optimization"
              className="hover:text-gray-300"
            >
              SEO
            </Link>
            <Link
              to="/services/digital-marketing"
              className="hover:text-gray-300"
            >
              Digital Marketing
            </Link>
            <Link
              to="/web-development-services"
              className="hover:text-gray-300"
            >
              Web Development
            </Link>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="wi_ulborder">
          <h4 className="text-lg font-normal mb-4 uppercase">Contact</h4>
          <p>Washington DC, USA</p>
          <p>+1 (800) 886-9095</p>
          <p>info@satamericana.com</p>
          <div className="flex space-x-4 mt-4">
            <ul className="space-x-5">
              <a
                href="https://www.facebook.com/Satamericana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.facebook.com/Satamericana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/Satamericana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/Satamericana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bi bi-yelp"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-blue-700 pt-4">
        © 2024 Digital Silk. All rights reserved | Privacy Policy |
        Accessibility
      </div>
    </footer>
  );
};

export default Footer;
