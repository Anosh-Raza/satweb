import React from 'react';

const CTAForm = ({ contactInfo, socialMediaLinks }) => {
  const { subheading, mainHeading, catchyText, locations, phones, emails } = contactInfo;

  return (
<div className='bg-logo-medium-blue-2 py-24'>
<div className=" py-12 px-6 sm:px-12 lg:px-24 text-white container mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold">{subheading}</h3>
            <h1 className="text-4xl font-bold my-2">{mainHeading}</h1>
            <p className="text-lg italic">{catchyText}</p>
          </div>

          {/* Locations */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Locations</h4>
            {locations.map((location, index) => (
              <p key={index} className="text-base">{location}</p>
            ))}
          </div>

          {/* Contact Numbers */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Phone Numbers</h4>
            {phones.map((phone, index) => (
              <p key={index} className="text-base">{phone}</p>
            ))}
          </div>

          {/* Emails */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Emails</h4>
            {emails.map((email, index) => (
              <p key={index} className="text-base">{email}</p>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-white text-black p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Website URL</label>
              <input
                type="url"
                placeholder="Enter your website URL"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-bold rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div></div>
  );
};

export default CTAForm;
