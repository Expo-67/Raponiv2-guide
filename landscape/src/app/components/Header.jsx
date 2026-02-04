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
      className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"
      } text-white`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={logoo}
            alt="Raponi Gardens logo"
            width={68}
            height={68}
            className="rounded-full border border-white/30"
          />
          <span className="text-sm uppercase tracking-[0.2em] text-white/90">Raponi Gardens</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-xs uppercase tracking-wide hover:text-white/70">
            About
          </Link>
          <Link href="#services" className="text-xs uppercase tracking-wide hover:text-white/70">
            Services
          </Link>
          <Link href="#projects" className="text-xs uppercase tracking-wide hover:text-white/70">
            Projects
          </Link>
          <Link href="#contact" className="text-xs uppercase tracking-wide hover:text-white/70">
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/70 backdrop-blur-sm py-4 border-t border-white/10"
        >
          <nav className="flex flex-col items-center gap-2">
            <Link
              href="#about"
              className="py-3 w-full text-center font-medium text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="py-3 w-full text-center font-medium text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="py-3 w-full text-center font-medium text-white/90 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="py-3 w-full text-center font-semibold text-white bg-white/10 rounded-md mx-6 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
