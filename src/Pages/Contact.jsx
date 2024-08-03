import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all fields.');
      return;
    }
    setFormError('');
    setFormSuccess('Thank you for your message! We will get back to you soon.');
    // Here you would typically handle form submission, e.g., sending data to a server
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            <a href="/">MyLogo</a>
          </div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                ></textarea>
              </label>
              {formError && <p className="text-red-500 mb-4">{formError}</p>}
              {formSuccess && <p className="text-green-500 mb-4">{formSuccess}</p>}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-2">Phone: (+088) 01933-458846</p>
            <p className="text-gray-700 mb-2">Email: fakirabuhuraira@gmail.com</p>
            <p className="text-gray-700 mb-4">Address: Batiya, Shahzadpur, Sirajganj,BD</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
              {/* Placeholder for map integration */}
              <p className="text-center pt-24 text-gray-500">Map goes here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Have Any Questions?</h2>
        <p className="text-lg mb-6">We are here to help! Feel free to reach out to us with any inquiries or feedback.</p>
        <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-6 rounded-lg text-lg">Contact Us</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 MyCompany. All rights reserved.</p>
          <p className="text-sm">Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
