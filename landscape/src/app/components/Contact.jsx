"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Landscape Inquiry: ${formData.service || "General"}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService Needed: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:otipogideon@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-start mb-3">
                <Mail className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  Get in touch
                </span>
              </div>
              <h2 className="text-4xl font-bold text-green-900 leading-tight">
                Contact us for your
                <br />
                <span className="text-yellow-500">Landscape</span>
                <br />
                Solution Needs
              </h2>
            </div>
            <p className="mb-8 text-gray-700 text-lg">
              Are you looking for top-quality landscaping experts
              <br />
              to transform your space? Reach out to us today.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">E-mail</p>
                  <p className="font-medium text-green-900 text-lg">
                    otipogideon@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone number</p>
                  <p className="font-medium text-green-900 text-lg">
                    0710526821 / 0737492018
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-green-900 text-lg">
                    P.O Box 574-00208 Ngong Hills
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4 shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Website</p>
                  <a
                    href="https://www.raponigardens.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-green-900 text-lg hover:text-green-700 transition-colors"
                  >
                    www.raponigardens.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl text-black">
              <h3 className="text-2xl font-bold mb-6 text-green-900">
                Contact-us at Raponi Gardens
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Service Needed
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors appearance-none"
                      required
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="garden-maintenance">
                        Garden Maintenance
                      </option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="environmental-conservation">
                        Environmental Conservation
                      </option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
