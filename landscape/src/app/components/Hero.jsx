"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import hero from "../assets/l10.jpg";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px]">
      <Image
        src={hero}
        alt="Beautiful landscaped garden"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-yellow-500/90 text-green-900 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              PROFESSIONAL LANDSCAPING SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Transforming Spaces into{" "}
              <span className="text-yellow-400">Natural Paradises</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Create a sustainable, stunning outdoor environment that enhances
              your property's beauty and value with our expert landscaping
              solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-x-4 flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200 shadow-lg"
              >
                View Our Portfolio
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Contact-us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
