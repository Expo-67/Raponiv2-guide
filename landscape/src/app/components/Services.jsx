"use client";

import Link from "next/link";
import Image from "next/image";
import treeDonations from "../assets/tree donations.jpg";
import csrEnvironment from "../assets/CSR enviroment activities.jpg";
import dragonFruit from "../assets/dragon fruit farming1.jpg";
import landscape1 from "../assets/add 5.jpg";
import landscape2 from "../assets/kisaju 5.jpg";
import landscape3 from "../assets/enviroment 2.jpg";
import landscape4 from "../assets/l9.jpg";
import landscape5 from "../assets/dragon fruit farming2.jpg";
import hardscape from "../assets/l6.jpg";
import water from "../assets/w1.jpg";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landscape Design",
      icon: "🏞️",
      image: landscape1,
      description:
        "Custom landscape design and planning to create your dream outdoor space.",
    },
    {
      title: "Garden Maintenance",
      icon: "🌱",
      image: landscape2,
      description:
        "Regular garden care and maintenance to keep your outdoor space thriving year-round.",
    },
    {
      title: "Sustainable Landscaping",
      icon: "♻️",
      image: landscape4,
      description:
        "Eco-friendly practices and designs that conserve water and support local ecosystems.",
    },
    {
      title: "Hardscaping",
      icon: "🧱",
      image: hardscape,
      description:
        "Beautiful patios, walkways, and retaining walls to enhance your outdoor living areas.",
    },
    {
      title: "CSR Environmental Activities",
      icon: "🌍",
      image: csrEnvironment,
      description:
        "Tree growing initiatives including adoption of main street in Ngong town from PCEA church and school. Tree donations to churches, schools, and rehabilitation centers in Ngong.",
    },
    {
      title: "Drago & Fruit Farming",
      icon: "🌳",
      image: dragonFruit,
      description:
        "Specialized cultivation of drago trees and various fruit species, promoting sustainable agriculture and biodiversity.",
    },
    {
      title: "Agribusiness",
      icon: "🌾",
      image: landscape3,
      description:
        "Empowering communities through agriculture. We have a farm in Kajiado helping Masais do farming, promoting sustainable livelihoods and food security.",
    },
    {
      title: "Apple Farming",
      icon: "🍎",
      image: landscape5,
      description:
        "Professional apple farming solutions with expertise in cultivation, pest management, and harvesting techniques for optimal yield.",
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
              className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-green-100 group bg-white"
            >
              {service.image ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="p-8 pb-0">
                  <div className="text-4xl mb-5 bg-green-50 h-16 w-16 flex items-center justify-center rounded-full group-hover:bg-green-100 transition-colors">
                    {service.icon}
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-green-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Contact-us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
