import React, { useState } from 'react';

const PackagesTab = ({ services }) => {
  const [activeTab, setActiveTab] = useState(services[0]?.id || 1); // Ensure it matches the numeric type

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex justify-center mb-6 space-x-4 flex-wrap overflow-x-auto scrollbar-hide">

        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleTabClick(service.id)}
            className={`px-3 py-2 font-semibold ${
              activeTab === service.id ? 'bg-logo-purple text-white' : 'bg-gray-200 text-logo-dark-blue'
            } rounded-t-lg hover:bg-logo-purple hover:text-white transition-colors`}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {services.map((service) =>
          activeTab === service.id ? (
            <div key={service.id}>
              <h2 className="text-3xl font-bold mb-4">{service.name} Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="p-6 bg-logo-medium-blue-2 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
                  >
                    <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <i className="bi bi-check-circle text-logo-purple"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xl font-semibold">{pkg.price}</p>
                    <button className="mt-4 bg-logo-purple py-2 px-4 rounded hover:bg-theme-white hover:text-logo-purple font-semibold">
                      Get Started <i class="bi bi-arrow-up-right-square"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default PackagesTab;
