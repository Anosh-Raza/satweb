import React from "react";
import Form from "../../components/form"

const CTAForm = ({ contactInfo, socialMediaLinks }) => {
  const { subheading, mainHeading, catchyText } =
    contactInfo;

  return (
    <div className="bg-logo-medium-blue-2 py-12 px-4">
      <div className=" py-12 sm:px-12 text-white container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">{subheading}</h3>
              <h1 className="text-6xl font-bold my-2 text-neon-blue wi_ctaMain">{mainHeading}</h1>
              <p className="text-lg italic">{catchyText}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold wi_follow relative">Follow Us</h2>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  wi_social"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default CTAForm;
