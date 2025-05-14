"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landscape Design",
      icon: "🏞️",
      description:
        "Custom landscape design and planning to create your dream outdoor space.",
    },
    {
      title: "Garden Maintenance",
      icon: "🌱",
      description:
        "Regular garden care and maintenance to keep your outdoor space thriving year-round.",
    },
    {
      title: "Outdoor Lighting",
      icon: "💡",
      description:
        "Enhance beauty and security with custom outdoor lighting solutions.",
    },
    {
      title: "Water Features",
      icon: "💦",
      description:
        "Custom fountains, ponds, and water features to add tranquility to your landscape.",
    },
    {
      title: "Sustainable Landscaping",
      icon: "♻️",
      description:
        "Eco-friendly practices and designs that conserve water and support local ecosystems.",
    },
    {
      title: "Hardscaping",
      icon: "🧱",
      description:
        "Beautiful patios, walkways, and retaining walls to enhance your outdoor living areas.",
    },
    {
      title: "Drainage Solutions",
      icon: "🌧️",
      description:
        "Effective drainage systems to protect your property from water damage.",
    },
    {
      title: "Environmental Conservation",
      icon: "🌍",
      description:
        "Community projects and practices that support environmental sustainability.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-3">
            <Leaf className="text-green-600 mr-2 h-5 w-5" />
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl text-green-900 font-bold mt-2">
            Expert Landscaping Solutions
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-green-100 group bg-white"
            >
              <div className="text-4xl mb-5 bg-green-50 h-16 w-16 flex items-center justify-center rounded-full group-hover:bg-green-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="#contact"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
