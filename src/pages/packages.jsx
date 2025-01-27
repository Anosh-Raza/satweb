import React from 'react';
import PackagesTab from '../components/pkg/pkgs'; 
import { pkgData } from '../data.js'; 

const Packages = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-logo-dark-blue text-center mb-10">Our Services</h1>
      <PackagesTab services={pkgData} /> 
    </div>
  );
};

export default Packages;
