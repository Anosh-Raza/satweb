import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {/* Column 1: Logo & Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">SAT AMERICANA</h3>
          <p className="text-sm">
            We are a full-service digital solution agency focusing on branding, marketing, web design and development with clients ranging from start-ups to enterprises.
          </p>
        </div>

        {/* Column 2: Main Menu */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Main Menu</h4>
          <ul className="space-y-2 flex flex-col">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">About Us</Link>
          <Link to="/" className="hover:text-gray-300">Services</Link>
          <Link to="/" className="hover:text-gray-300">Portfolio</Link>
          <Link to="/" className="hover:text-gray-300">Blogs</Link>
          <Link to="/" className="hover:text-gray-300">Contact</Link>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 flex flex-col">
          <Link to="/" className="hover:text-gray-300">Amazon Selling Services</Link>
          <Link to="/" className="hover:text-gray-300">Web Development</Link>
          <Link to="/" className="hover:text-gray-300">Digital Marketing</Link>
          <Link to="/" className="hover:text-gray-300">Mobile App Development</Link>
          <Link to="/" className="hover:text-gray-300">Content Writing</Link>
          <Link to="/" className="hover:text-gray-300">Logo & Branding</Link>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Washington DC, USA</p>
          <p>+1 (800) 886-9095</p>
          <p>info@satamericana.com</p>
          <div className="flex space-x-4 mt-4">
            <ul className=" space-x-5 ">
            <Link to="/" className="hover:text-gray-300"><i class="bi bi-facebook"></i></Link>         
            <Link to="/" className="hover:text-gray-300"><i class="bi bi-instagram"></i></Link>          
            <Link to="/" className="hover:text-gray-300"><i class="bi bi-twitter"></i></Link>  
                </ul>        
        </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-blue-700 pt-4">
        © 2024 Digital Silk. All rights reserved | Privacy Policy | Accessibility
      </div>
    </footer>
  );
};

export default Footer;
