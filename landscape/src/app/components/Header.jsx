"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoo from "../assets/Logo Fin_page-0001(1).jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-green-800/95 backdrop-blur-sm shadow-md" : "bg-green-800"
      } text-white`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src={logoo}
            alt="Raponi Gardens logo"
            width={72}
            height={52}
            className="rounded-full border-2 border-yellow-400"
          />
          <span className="ml-3 text-xl font-bold text-white">
            Raponi Gardens
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
          >
            About Us
          </Link>
          <Link
            href="#projects"
            className="hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide font-medium"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="bg-yellow-500 text-green-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-wide font-bold shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            Contact Us
          </Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-green-800 py-4 border-t border-green-700"
        >
          <nav className="flex flex-col items-center gap-4">
            <Link
              href="#services"
              className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#projects"
              className="hover:text-yellow-300 transition-colors py-3 w-full text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="bg-yellow-500 text-green-900 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors w-4/5 text-center my-2 font-bold shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
