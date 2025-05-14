"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ChevronRight } from "lucide-react";
import about from "../assets/l12.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start mb-3">
            <Leaf className="text-green-600 mr-2 h-5 w-5" />
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              ABOUT US
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-green-900 font-bold mb-8 leading-tight">
              A beautiful garden is a{" "}
              <span className="text-yellow-500">work of art</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              For over a decade, we've been creating elegant and sustainable
              landscapes that transform ordinary spaces into extraordinary
              outdoor experiences. Our passion for plants and design excellence
              drives everything we do.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              We take pride in our work, treating each garden as a unique canvas
              that reflects the personality and lifestyle of our clients. From
              concept to completion, we're committed to exceeding your
              expectations.
            </p>
            <Link
              href="#team"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
            >
              Meet our team <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={about}
              alt="Gardener working"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
