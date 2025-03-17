// Contact.js
import React from "react";
import { contactData } from "../data"; // Import data

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-accent text-white pt-28 px-6 md:px-20">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{contactData.title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{contactData.description}</p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactData.contactInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
          >
            <i className={`${info.icon} text-4xl mb-4 text-neon-blue`}></i>
            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
            <p className="text-gray-300">{info.details}</p>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {contactData.socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-neon-blue transition duration-300"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white bg-opacity-10 p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-neon-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;