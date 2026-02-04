"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import rubis from "../assets/rubis.jpg";
import karuriLevel4 from "../assets/karuri level 4 1.jpg";
import kisaju from "../assets/kisaju 1.jpg";
import dragonFruit from "../assets/kisaju 5.jpg";
export default function Portfolio() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            className="order-2 md:order-1 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="relative h-74 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                <Image
                  src={rubis}
                  alt="Rubis Commercial Landscaping"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={karuriLevel4}
                  alt="Karuri Level 4 Hospital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={kisaju}
                  alt="Kisaju Landscaping Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={dragonFruit}
                  alt="Dragon Fruit Farming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-start mb-3">
              <Leaf className="text-green-600 mr-2 h-5 w-5" />
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-green-900 leading-tight">
              A peek at our landscape{" "}
              <span className="text-yellow-500">creations</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Browse through our portfolio of completed projects. Each landscape
              tells a unique story and showcases our commitment to quality,
              sustainability, and beautiful design.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-medium shadow-lg"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
