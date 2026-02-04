"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import hero from "../assets/l16.jpg";
import showcase from "../assets/des2.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Background Image */}
      <Image
        src={hero}
        alt="Beautiful landscaped garden"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40">
        <div className="container mx-auto h-full px-6 md:px-12 lg:px-16 py-12 flex flex-col justify-between">

          {/* ================= Main Hero Content ================= */}
          <div className="flex-1 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                CREATING YOUR
                <br />
                DREAM GARDEN
              </h1>

              <p className="text-base md:text-lg text-white/95 mb-10 max-w-xl leading-relaxed drop-shadow-md">
                Crafting dream gardens with passion, creativity, and sustainability
                for over a decade with our experienced landscape artists and team.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center border border-white/60 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-white/10 hover:border-white transition-all"
                >
                  Explore Our Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= Bottom Section ================= */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-white">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">30+</div>
                <div className="text-xs md:text-sm text-white/80">Satisfied Clients</div>
              </div>
            </motion.div>

            {/* Featured Project Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 w-full md:max-w-md"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="bg-white/20 p-2 md:p-2.5 rounded-full flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>

                <Link
                  href="#contact"
                  className="bg-white/20 p-2 md:p-2.5 rounded-full hover:bg-white/30 transition-colors flex-shrink-0"
                  aria-label="Contact us about Raponi Gardens"
                >
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </Link>
              </div>

              {/* Showcase image */}
              <div className="relative w-full h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden mb-3 md:mb-4">
                <Image src={showcase} alt="Raponi Gardens showcase" fill className="object-cover" />
              </div>

              <h3 className="text-white/95 text-lg md:text-xl font-bold mb-2">
                Raponi Gardens
              </h3>

              
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
