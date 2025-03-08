import React, { useState } from "react";
import { FaUser, FaHome, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49a5e55d-f03d-4ecd-ab76-d5f3f154f1f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="">
      <div className="max-w-md w-fullp-8">
        <h2 className="text-3xl mb-8 text-theme-white">
          Start A Conversation With Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex items-center border-b border-[#ffffff23] focus-within:border-blue-500 text-base">
            <FaUser className="mr-4" />
            <input
              type="text"
              name="name"
              id="name"
              required
              className="flex-1 py-2 bg-transparent outline-none placeholder-theme-white"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="flex items-center border-b border-[#ffffff23] focus-within:border-blue-500">
            <FaHome className="mr-4" />
            <input
              type="text"
              name="company_name"
              id="company_name"
              required
              className="flex-1 py-2 bg-transparent outline-none placeholder-theme-white"
              placeholder="Company Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center border-b border-[#ffffff23] focus-within:border-blue-500">
          <FaEnvelope className="mr-4" />
            <input
              type="email"
              name="email"
              id="email"
              required
              className="flex-1 py-2 bg-transparent outline-none placeholder-theme-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex items-center border-b border-[#ffffff23] focus-within:border-blue-500">
          <FaPhone className="mr-4" />
            <input
              type="number"
              name="number"
              id="number"
              className="flex-1 py-2 bg-transparent outline-none placeholder-theme-white"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex border-b border-[#ffffff23] focus-within:border-blue-500">
          <FaComment className="mr-4 mt-3" />
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="flex-1 py-2 bg-transparent outline-none placeholder-theme-white"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-1/2 flex justify-center p-4 text-base font-medium text-white bg-gradient-to-tr from-logo-purple to-neon-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase"
            >
              Submit Form
            </button>
          </div>
        </form>

        {/* Result Message */}
        {result && (
          <div className="mt-6">
            <span className="text-sm font-medium text-theme-white uppercase">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
