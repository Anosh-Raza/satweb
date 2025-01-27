import React, { useState } from 'react';
import { contactFormData } from '../data.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-12 px-6 rounded-lg">
      <h2 className="text-4xl font-bold text-logo-dark-blue mb-6 text-center">{contactFormData.title}</h2>
      <p className="text-center mb-8">{contactFormData.description}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {contactFormData.fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id} className="mb-2 text-logo-dark-blue font-semibold">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id]}
                onChange={handleChange}
                className="p-4 border rounded-lg focus:outline-logo-purple"
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id]}
                onChange={handleChange}
                className="p-4 border rounded-lg focus:outline-logo-purple"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-logo-purple text-white font-bold rounded-lg hover:bg-logo-dark-blue transition-colors">
          {contactFormData.submitText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
